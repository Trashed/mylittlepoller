import { BaseWrapper, DOMWrapper, VueWrapper, mount, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, test } from "vitest";
import CreateNewPoller from '../../src/components/CreateNewPoller.vue';

describe.concurrent('CreateNewPoller', () => {

  const newPollerForm = '[data-test="new-poller-form"]';
  const targetUrlOrQueryEndpoint = '[data-test="target-url-or-query-endpoint"]';
  const addCSSSelectorsDiv = '[data-test="add-css-selectors"]';
  const cssSelectorStringTemplate = '[data-test="css-selector-<id>"]';

  let wrapper: VueWrapper;

  let form: BaseWrapper<Element>;
  let targetUrlOrQueryEndpointInputElement: BaseWrapper<Element>;
  let addCSSSelectorsDivElement: BaseWrapper<Element>;
  // let cssSelectorsInputElement: BaseWrapper<Element>;

  beforeEach(async() => {
    wrapper = mount(CreateNewPoller, {
      attachTo: document.body
    });

    form = wrapper.find(newPollerForm);
    targetUrlOrQueryEndpointInputElement = wrapper.find(targetUrlOrQueryEndpoint);
    addCSSSelectorsDivElement = wrapper.find(addCSSSelectorsDiv);
    // cssSelectorsInputElement = wrapper.find(cssSelectors);
  });

  test('should initialise the UI', () => {
    expect(form).not.toBeNull();
    expect(form.exists()).toBe(true);
    expect(targetUrlOrQueryEndpointInputElement).not.toBeNull();
    expect(targetUrlOrQueryEndpointInputElement.exists()).toBe(true);
    expect(addCSSSelectorsDivElement).not.toBeNull();
    expect(addCSSSelectorsDivElement.exists()).toBe(true);
    expect(addCSSSelectorsDivElement.element.children.length).toEqual(1);

    let cssSelectorField1 = '[data-test="css-selector-poller-result-field-1"]';
    let cssSelectors1 = '[data-test="css-selectors-1"]';
    let cssSelectorFieldElem1 = wrapper.find(cssSelectorField1);
    let cssSelectorsElem1 = wrapper.find(cssSelectors1);
    expect(cssSelectorFieldElem1).not.toBeNull()
    expect(cssSelectorFieldElem1.exists()).toBe(true);
    expect(cssSelectorsElem1).not.toBeNull()
    expect(cssSelectorsElem1.exists()).toBe(true);

    // TODO: Button for adding new CSS selectors
  });

  test('should create new poller on button click', async() => {

    // TODO: Insert data to fields
    // TODO: Trigger save button
    // TODO: Mock HTTP call to backend - see: https://test-utils.vuejs.org/guide/advanced/http-requests
    // TODO: Assert saving

    expect.fail('not implemented');
  });
});