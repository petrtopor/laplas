import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {
      stubs: {
        'nuxt-link': true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
