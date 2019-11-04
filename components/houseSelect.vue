<template>
  <el-autocomplete
    v-model="houseValue"
    :fetch-suggestions="houseSearchAsync"
    placeholder="Дом"
    @select="handleHouseSelect"
    :disabled="streetAoguid === '' || !streetAoguid"
  ></el-autocomplete>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'HouseSelect',
  props: {
    streetAoguid: String
  },
  data() {
    return {
      houseValue: ''
    }
  },
  methods: {
    handleHouseSelect(houseSelected) {
      this.$emit('select', houseSelected)
    },
    fetchHousessList(aoguid) {
      const result = new Promise((resolve) => {
        axios
          .get(
            `https://fias1.euler.solutions:443/api/v1/houses?aoguid=${aoguid}`
          )
          .then((response) => {
            console.log(`fetchHousessList RESPONSE:\n\t`, response.data.data)
            resolve(response.data.data)
          })
          .catch((error) => {
            console.error('fetchHousessList REJECT:\n\t', error)
            resolve([])
          })
      })
      return result
    },
    houseSearchAsync: _.debounce(function(queryString, cb) {
      this.fetchHousessList(this.streetAoguid).then((fetchedHousesList) => {
        const values = fetchedHousesList
          .filter((item) =>
            _.startsWith(_.lowerCase(item.housenum), _.lowerCase(queryString))
          )
          .map((item) => {
            return {
              value: item.housenum + (item.buildnum ? ' ' + item.buildnum : ''),
              postalcode: item.postalcode
            }
          })
        cb(values)
      })
    }, 800)
  }
}
</script>
