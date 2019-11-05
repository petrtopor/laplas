import { mount } from '@vue/test-utils'
import CardAdd from '@/components/cardAdd.vue'

describe('CardAdd', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardAdd)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})