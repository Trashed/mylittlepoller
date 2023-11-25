<script setup lang="ts">
</script>

<template>
  <div>
    <label for="running-pollers-table">Running pollers</label>
    <table id="running-pollers-table">
      <thead>
        <tr>
          <th>Site</th>
          <th>Pattern</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody data-test="running-pollers-table-body">
      </tbody>
    </table>
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