import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Address from '@/pages/address.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Address', () => {
  let getters
  let store
  beforeEach(() => {
    getters = {
      'address/currentRegion': () => {
        return { name: '' }
      },
      'address/currentCity': () => {
        return { aoguid: '' }
      },
      'address/currentStreet': () => {
        return { aoguid: '' }
      }
    }
    store = new Vuex.Store({
      getters
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(
      Address,
      {
        store,
        localVue,
        stubs: {
          'el-container': true,
          'el-header': true,
          'el-page-header': true,
          'el-main': true,
          'el-row': true,
          'el-select': true,
          'el-option': true,
          'el-input': true,
          'el-col': true,
          'el-footer': true
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
