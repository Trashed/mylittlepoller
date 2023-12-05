<script setup lang="ts">
import { ref } from 'vue';


interface CSSSelector {
  id: number,
  field: string,
  cssSelectors: string
}

const cssSelectors = ref<CSSSelector[]>([{id: 1, field: '', cssSelectors: ''}]);

function getResultFieldId(id: number) {
  return `css-selector-poller-result-field-${id}`;
}

function getCssSelectorsId(id: number) {
  return `css-selectors-${id}`;
}
</script>

<template>
  <h3>New poller</h3>
  <form id="new-poller-form" data-test="new-poller-form">
    <label for="target-url-or-query-endpoint">Target URL / Search query: </label>
    <input id="target-url-or-query-endpoint" type="url" placeholder="Enter target URL or search query" data-test="target-url-or-query-endpoint"/>
    <br/>
    <label for="add-css-selectors">CSS selectors</label> <br/>
    <!-- <input id="css-selectors" type="text" placeholder="Enter comma-separated list of CSS selectors" data-test="css-selectors"/>-->
    <div v-for="cssSelector in cssSelectors" :key="cssSelector.id" id="add-css-selectors" data-test="add-css-selectors">
      <div class="css-selector-inputs-container" data-test="css-selector-inputs-container">
        <label v-bind:for="getResultFieldId(cssSelector.id)">Poller result field: </label>
        <input v-model="cssSelector.field" v-bind:id="getResultFieldId(cssSelector.id)" type="text" placeholder="A field name in the poller result, e.g. Title" v-bind:data-test="getResultFieldId(cssSelector.id)"/>
        <br/>
        <label v-bind:for="getCssSelectorsId(cssSelector.id)">CSS selector: </label>
        <input v-model="cssSelector.cssSelectors" v-bind:id="getCssSelectorsId(cssSelector.id)" type="text" placeholder="CSS selectors to search in the website" v-bind:data-test="getCssSelectorsId(cssSelector.id)"/>
      </div>
    </div>
    <input id="add-css-selector" type="button" value="+" data-test="add-css-selector-button"/>
    <!-- <button class="w3-button w3-ripple w3-circle w3-green" data-test="add-css-selector-button">+</button> -->
  </form>
</template>

<style scoped lang="scss">
@import '../styles/mixins';

input {
  width: max-content;
}

input#add-css-selector {
  @include btn-block-primary;
}
</style>