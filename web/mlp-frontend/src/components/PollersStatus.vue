<script setup lang="ts">
import { onMounted, ref } from 'vue';

const runningPollers = ref<Poller[]>([]);
  
let client: WebSocket;

interface Poller {
  site: string;
  pattern: string;
  status: string;   // TODO: Could possibly be an enum, as well?
};


onMounted(() => {
  client = new WebSocket('ws://localhost:1212');
  client.onopen = () => {
    console.log('WebSocket connection opened');   // TODO: Replace with proper logging
    client.send('getRunningPollers');
  };
  client.onmessage = (event: MessageEvent<string>) => {
    let pollers: Poller[] = [];

    try {
      pollers = <Poller[]>JSON.parse(event.data);
    } catch(error: any) {
      console.error(`Error reading websocket data: ${error}`)
    }

    if (pollers && pollers.length > 0) {
      runningPollers.value.splice(0, runningPollers.value.length);
      pollers.map(poller => runningPollers.value.push(poller));
    }
  };
});
</script>

<template>
  <div>
    <label for="running-pollers-table">Running pollers</label>
    <div v-if="runningPollers.length > 0" id="running-poller-div">
      <table id="running-pollers-table" data-test="running-pollers-div">
        <thead>
          <tr>
            <th>Site</th>
            <th>Pattern</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody data-test="running-pollers-table-body">
          <tr v-for="poller in runningPollers" :key="poller.site">
            <td>{{ poller.site }}</td>
            <td>{{ poller.pattern }}</td>
            <td>{{ poller.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- TODO: Make the error more verbose, 'error-y' -->
    <div v-else id="no-running-pollers-error" >
      <p data-test="no-running-pollers-error">No running pollers</p>
    </div>
  </div>
</template>

<style scoped>
table {
  border: 2px solid black;
  tr {
    border-bottom: 1px solid grey;
  }
}
</style>