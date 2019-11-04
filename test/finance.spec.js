import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Finance from '@/pages/finance.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Finance', () => {
  let getters
  let store
  beforeEach(() => {
    getters = {
      'finance/cards': () => {
        return []
      }
    }
    store = new Vuex.Store({
      getters
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(
      Finance,
      {
        store,
        localVue,
        stubs: {
          'el-container': true,
          'el-header': true,
          'el-page-header': true,
          'el-main': true,
          'el-row': true,
          'el-col': true,
          'el-footer': true
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
 /*
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Finance)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  */
})
