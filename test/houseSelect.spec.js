import { shallowMount } from '@vue/test-utils'
import houseSelect from '@/components/houseSelect.vue'
jest.mock('axios')

describe('houseSelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(houseSelect, {
      stubs: {
        'el-autocomplete': true
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      done()
    })
  })
})
