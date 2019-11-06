import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import axios from 'axios';
import CitySelect from '@/components/citySelect.vue'
import ElSelect from 'element-ui'
jest.mock('axios')
const mockResponse = {
  "data": [
    {
      "aoguid": "c65f3475-43a3-4433-9033-7d9180c5519b",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, пер Ватутина 4-й",
      "item_fullname": "Ватутина 4-й",
      "item_weight": 64,
      "kladr": "73000001000017500",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432002,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Переулок"
    },
    {
      "aoguid": "3ffe90d9-1da0-4586-93da-fca4b36264cb",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, пер Ватутина 2-й",
      "item_fullname": "Ватутина 2-й",
      "item_weight": 64,
      "kladr": "73000001000007700",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432002,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Переулок"
    },
    {
      "aoguid": "73ce4d5c-a88b-4967-b4b8-0edc9c7264e4",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, ал. Валентины Леонтьевой",
      "item_fullname": "Валентины Леонтьевой",
      "item_weight": 64,
      "kladr": "73000001000123300",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": null,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Аллея"
    },
    {
      "aoguid": "7b9d2337-9dd9-441a-8d3f-e99c53073474",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, ул Ватутина",
      "item_fullname": "Ватутина",
      "item_weight": 90,
      "kladr": "73000001000024800",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432030,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Улица"
    },
    {
      "aoguid": "f5e128e8-98bc-49a9-a906-89d84a8f77fe",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, пер Ватутина 3-й",
      "item_fullname": "Ватутина 3-й",
      "item_weight": 64,
      "kladr": "73000001000014600",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432002,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Переулок"
    },
    {
      "aoguid": "e8cd1ff3-eb6a-4504-8818-f8079c3f5588",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, пер Ватутина 1-й",
      "item_fullname": "Ватутина 1-й",
      "item_weight": 64,
      "kladr": "73000001000000400",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432071,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Переулок"
    },
    {
      "aoguid": "4a06c6b7-6505-432b-8892-b9d577ea6886",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, ул Сакко и Ванцетти",
      "item_fullname": "Сакко и Ванцетти",
      "item_weight": 90,
      "kladr": "73000001000056600",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432010,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Улица"
    },
    {
      "aoguid": "1a270940-e9ad-4734-8a74-995ed725f43f",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, ул Варейкиса",
      "item_fullname": "Варейкиса",
      "item_weight": 90,
      "kladr": "73000001000024600",
      "parentguid": "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
      "postalcode": 432044,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Улица"
    },
    {
      "aoguid": "8c9526f8-ab6d-4b8f-8108-cfa0aeddec4e",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, с Карлинское, пер Ватутина",
      "item_fullname": "Ватутина",
      "item_weight": 64,
      "kladr": "73000001005001500",
      "parentguid": "29c6ddc6-a3e7-4edb-8924-8bd43879b661",
      "postalcode": null,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Село, Переулок"
    },
    {
      "aoguid": "b2690f5c-a45a-49f4-9fc3-75471dfcbbaa",
      "aolevel": 7,
      "fullname": "обл Ульяновская, г Ульяновск, с Карлинское, ул Ватутина",
      "item_fullname": "Ватутина",
      "item_weight": 90,
      "kladr": "73000001005000200",
      "parentguid": "29c6ddc6-a3e7-4edb-8924-8bd43879b661",
      "postalcode": 433318,
      "rank": 0.10000000149011612,
      "regioncode": "73",
      "scname": "Область, Город, Село, Улица"
    }
  ]
}

describe('CitySelect', () => {
  test('is a Vue instance', (done) => {
    const wrapper = shallowMount(CitySelect, {
      stubs: {
        'el-select': true
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      done()
    })
  })

  test('<el-select> gets created inside my CitySelect component as a child', async () => {
    const localVue = createLocalVue()
    localVue.use(ElSelect)
    const wrapper = shallowMount(ElSelect, {
      name: 'ElSelect',
      parentComponent: CitySelect
    })
    await expect(wrapper.vm.$parent.$options.name).toBe('CitySelect')
  })
  /*
  test('streets list gets requested from the server', async () => {
    // The component <el-select> cannot get mounted properly so nothing inside it can be tested for now
    // need to consult /w Euler guys regarding this issue
    jest.useFakeTimers()
    axios.get.mockResolvedValue(mockResponse)
    const localVue = createLocalVue()
    localVue.use(ElSelect)
    const wrapper = shallowMount(CitySelect, {
      localVue
    })
    wrapper.setData({value: 'ва'})
    await expect(wrapper.vm.options.length).toBe(0)
    jest.advanceTimersByTime(5000)
    await expect(axios.get).toBeCalled()
    await expect(wrapper.vm.options.length).not.toBe(0)
  })
  */
})
