import { mount } from '@vue/test-utils'
import card from '@/components/card.vue'

describe('card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(card, {
      propsData: {
        card: {
          name: 'Моя карта',
          isConfirmed: true,
          number: '4000-0000-0000-0002'
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
