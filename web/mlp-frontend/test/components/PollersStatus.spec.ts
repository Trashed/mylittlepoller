
import { beforeEach, describe, expect, test } from 'vitest';
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils';
import PollersStatus from '../../src/components/PollersStatus.vue';

describe.concurrent('PollersStatus', () => {

    let wrapper: VueWrapper;
    let tableBodyElement: Omit<DOMWrapper<HTMLElement>, 'exists'>;

    beforeEach(() => {
        wrapper = mount(PollersStatus);
        tableBodyElement = wrapper.get('[data-test="running-pollers-table-body"]');
    });

    test('should initialise', () => {
        expect(tableBodyElement.element.children.length).toBe(0);
    });
});