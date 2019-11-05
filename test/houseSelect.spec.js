import { shallowMount } from '@vue/test-utils'
import HouseSelect from '@/components/houseSelect.vue'
jest.mock('axios')

describe('HouseSelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(HouseSelect, {
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
