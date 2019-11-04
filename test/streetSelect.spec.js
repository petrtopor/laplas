import { shallowMount } from '@vue/test-utils'
import streetSelect from '@/components/streetSelect.vue'
jest.mock('axios')

describe('streetSelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(streetSelect, {
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
