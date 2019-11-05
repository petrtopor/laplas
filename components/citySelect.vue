<template>
  <el-select
    v-model="value"
    filterable
    remote
    reserve-keyword
    placeholder="Город"
    :remote-method="remoteMethod"
    :loading="loading"
    @change="onChanged"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'CitySelect',
  props: {
    region: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: [],
      value: [],
      loading: false
    }
  },
  methods: {
    remoteMethod: _.debounce(function(query) {
      if (query !== '') {
        this.loading = true
        axios
          .get(
            `https://fias1.euler.solutions:443/api/v1/city?query=${query}` +
              (this.region ? `&region_code=${this.region}` : '')
          )
          .then((response) => {
            this.loading = false
            this.options = response.data.data
              .filter((item) =>
                _.startsWith(
                  _.lowerCase(item.item_fullname),
                  _.lowerCase(query)
                )
              )
              .map((item) => {
                return {
                  ...item,
                  ...{ value: item.item_fullname, label: item.item_fullname }
                }
              })
          })
      } else {
        this.options = []
      }
    }, 800),
    onChanged(selectedCityName) {
      const selectedCity = this.options.filter(
        (option) => option.value === selectedCityName
      )[0]
      this.$emit('change', selectedCity)
    }
  }
}
</script>
