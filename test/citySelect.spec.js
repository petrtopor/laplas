import { shallowMount } from '@vue/test-utils'
import CitySelect from '@/components/citySelect.vue'
jest.mock('axios')

describe('CitySelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(CitySelect, {
      stubs: {
        'el-select': true
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      done()
    })
  })
})
