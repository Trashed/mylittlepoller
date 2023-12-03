
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { WS } from 'vitest-websocket-mock';
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils';
import PollersStatus from '../../src/components/PollersStatus.vue';
import CreateNewPoller from '../../src/components/CreateNewPoller.vue';

describe('PollersStatus', () => {

  let wrapper: VueWrapper;

  let fakeWSServer: WS;

  const pollersTableBody: string = '[data-test="running-pollers-table-body"]';
  const noRunningPollersError: string = '[data-test="no-running-pollers-error"]';
  const createNewPollerButton: string = '[data-test="new-poller-button"]';
  const createNewPollerDiv: string = '[data-test="create-new-poller-div"]';

  beforeEach(() => {

    fakeWSServer = new WS('ws://localhost:1212');
    wrapper = mount(PollersStatus, { 
      attachTo: document.body,  // This fixed the problem with isVisible: https://github.com/vuejs/vue-test-utils/issues/1456
      global: {
        components: {
          'CreateNewPoller': CreateNewPoller
        }
      }
    });
  });

  afterEach(() => {
    fakeWSServer.close();
    WS.clean();
  });

  test('should receive empty pollers array and show an error element', async() => {
    await fakeWSServer.connected;
    await expect(fakeWSServer).toReceiveMessage('getRunningPollers');

    fakeWSServer.send([]);

    await wrapper.vm.$nextTick();
    
    let noRunningPollersErrorElement = wrapper.get(noRunningPollersError);
    expect(noRunningPollersErrorElement.text()).toEqual('No running pollers');
  }, 2000);

  test('should receive a poller from websocket and show a table with a running pollers', async() => {
    await fakeWSServer.connected;
    await expect(fakeWSServer).toReceiveMessage('getRunningPollers');

    fakeWSServer.send(JSON.stringify([{
      site: 'www.testsite.com',
      pattern: 'xyz=123',
      status: 'running'
    }]));

    await wrapper.vm.$nextTick();
    
    let pollersTableBodyElement = wrapper.get(pollersTableBody);
    expect(pollersTableBodyElement.element.children.length).toEqual(1);
  }, 2000);

  test('it should show controls for creating a new poller after button click', async() => {
    let createNewButtonElement = wrapper.get(createNewPollerButton);
    expect(createNewButtonElement.element).not.toBeNull();
    expect(createNewButtonElement.isVisible()).toBe(true);

    await createNewButtonElement.trigger('click');
    expect(createNewButtonElement.isVisible()).toBe(false);
    
    let createNewPollerDivElement = wrapper.get(createNewPollerDiv);
    expect(createNewPollerDivElement.element).not.toBeNull();
    expect(createNewPollerDivElement.isVisible()).toBe(true);

    let createNewPollerComponent = wrapper.find('CreateNewPoller');
    expect(createNewPollerComponent).not.toBeNull();
  });
});