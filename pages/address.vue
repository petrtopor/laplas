<template>
  <div class="container">
    <el-select
      v-model="currentRegion.name"
      placeholder="Select"
      @change="onRegionChanged"
    >
      <el-option
        v-for="region in allRegions"
        :key="region.code"
        :label="region.code + ' - ' + region.name"
        :value="region"
      >
      </el-option>
    </el-select>
    <city-select
      :region="currentRegion.code"
      @change="onCityChanged"
    ></city-select>
  </div>
</template>
<script>
import _ from 'lodash'
import citySelect from '../components/citySelect'
export default {
  components: {
    'city-select': citySelect
  },
  name: 'Address',
  data() {
    return {
      allRegions: {}
    }
  },
  created() {
    this.allRegions = this.$store.state.address.allRegions
  },
  methods: {
    onRegionChanged(element) {
      this.$store.dispatch('address/setCurrentRegion', element)
    },
    onCityChanged(selectedCity) {
      // console.log('onCityChanged:\t', selectedCity)
      this.$store.dispatch('address/setCurrentCity', selectedCity)
    }
  },
  computed: {
    currentRegion() {
      return _.clone(this.$store.state.address.currentRegion)
    },
    currentCity() {
      return _.clone(this.$store.state.address.currentCity)
    }
  }
}
</script>
