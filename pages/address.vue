<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-row type="flex" class="row-bg" justify="center">
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
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <city-select
              :region="currentRegion.code"
              @change="onCityChanged"
            ></city-select>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <!-- <street-select
              :cityAoguid="cityAoguid"
              @select="onStreetSelected"
            ></street-select> -->
            <street-select
              :cityAoguid="currentCity.aoguid"
              @change="onStreetChanged"
            ></street-select>
          </el-row>
          <el-row :gutter="8" type="flex" class="row-bg" justify="center">
            <el-col :span="8">
              <house-select
                :streetAoguid="currentStreet.aoguid"
                @select="onHouseChanged"
              ></house-select>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="Корпус" v-model="buildingValue"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input
                placeholder="Квартира"
                v-model="apartmentValue"
              ></el-input>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="20">
              <span>Полный адрес: {{ fullAddressString }}</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import _ from 'lodash'
import citySelect from '../components/citySelect'
import streetSelect from '../components/streetSelect'
import houseSelect from '../components/houseSelect'
export default {
  components: {
    'city-select': citySelect,
    'street-select': streetSelect,
    'house-select': houseSelect
  },
  name: 'Address',
  data() {
    return {
      allRegions: {},
      buildingValue: '',
      apartmentValue: ''
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
      this.$store.dispatch('address/setCurrentCity', selectedCity)
    },
    onStreetChanged(selectedStreet) {
      this.$store.dispatch('address/setCurrentStreet', selectedStreet)
    },
    onHouseChanged(selectedHouse) {
      this.$store.dispatch('address/setCurrentHouse', selectedHouse)
    }
  },
  computed: {
    currentRegion() {
      return _.clone(this.$store.state.address.currentRegion)
    },
    currentCity() {
      return _.clone(this.$store.state.address.currentCity)
    },
    currentStreet() {
      return _.clone(this.$store.state.address.currentStreet)
    },
    fullAddressString() {
      return _.clone(this.$store.getters['address/fullAddressString'])
    }
  },
  watch: {
    buildingValue(newBuildingValue, oldBuildingValue) {
      this.$store.dispatch('address/setCurrentBuilding', newBuildingValue)
    },
    apartmentValue(newApartmentValue, oldApartmentValue) {
      this.$store.dispatch('address/setCurrentBuilding', newApartmentValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-select {
  flex-grow: 1;
}
.el-autocomplete {
  flex-grow: 1;
}
.el-row {
  margin-bottom: 8px;
}
</style>
