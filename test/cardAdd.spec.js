import { mount } from '@vue/test-utils'
import cardAdd from '@/components/cardAdd.vue'

describe('cardAdd', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(cardAdd)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})