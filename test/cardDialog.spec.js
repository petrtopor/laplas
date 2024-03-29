import { shallowMount } from '@vue/test-utils'
import CardDialog from '@/components/cardDialog.vue'

describe('CardDialog', () => {
  test('is a Vue instance', () => {
    const vueTheMaskDirectiveMock = jest.fn()
    const wrapper = shallowMount(CardDialog, {
      directives: {
        'mask': vueTheMaskDirectiveMock
      },
      propsData: {
        card: {
          name: 'Моя карта',
          isConfirmed: true,
          number: '4000-0000-0000-0002'
        }
      },
      stubs: {
        'el-dialog': true,
        'el-input': true,
        'el-button': true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
