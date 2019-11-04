import { shallowMount } from '@vue/test-utils'
import citySelect from '@/components/citySelect.vue'
jest.mock('axios')

describe('citySelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(citySelect, {
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
