import { shallowMount } from '@vue/test-utils'
import StreetSelect from '@/components/streetSelect.vue'
jest.mock('axios')

describe('streetSelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(StreetSelect, {
      stubs: {
        'el-select': true,
        'el-optio': true
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      done()
    })
  })
})
