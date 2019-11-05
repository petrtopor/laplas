<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-page-header content="Поиск и подстановка адреса" @back="goBack">
        </el-page-header>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6" :offset="9">
            <div class="address-placeholder">
              <el-row type="flex" class="row-bg" justify="center">
                <el-select
                  v-model="currentRegion.name"
                  placeholder="Регион"
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
                <street-select
                  :city-aoguid="currentCity.aoguid"
                  @change="onStreetChanged"
                ></street-select>
              </el-row>
              <el-row :gutter="8" type="flex" class="row-bg" justify="center">
                <el-col :span="8">
                  <house-select
                    :street-aoguid="currentStreet.aoguid"
                    @select="onHouseChanged"
                  ></house-select>
                </el-col>
                <el-col :span="8">
                  <el-input
                    v-model="buildingValue"
                    placeholder="Корпус"
                  ></el-input>
                </el-col>
                <el-col :span="8">
                  <el-input
                    v-model="apartmentValue"
                    placeholder="Квартира"
                  ></el-input>
                </el-col>
              </el-row>
              <el-row
                v-if="fullAddressString !== ''"
                type="flex"
                class="row-bg"
                justify="center"
              >
                <el-col :span="20">
                  <span>Полный адрес: {{ fullAddressString }}</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import _ from 'lodash'
import citySelect from '../components/citySelect'
import streetSelect from '../components/streetSelect'
import houseSelect from '../components/houseSelect'
export default {
  name: 'Address',
  components: {
    'city-select': citySelect,
    'street-select': streetSelect,
    'house-select': houseSelect
  },
  data() {
    return {
      allRegions: {},
      buildingValue: '',
      apartmentValue: ''
    }
  },
  computed: {
    currentRegion() {
      // return _.clone(this.$store.state.address.currentRegion)
      // return this.$store.getters['address/currentRegion']
      return _.clone(this.$store.getters['address/currentRegion'])
    },
    currentCity() {
      // return _.clone(this.$store.state.address.currentCity)
      // return this.$store.getters['address/currentCity']
      return _.clone(this.$store.getters['address/currentCity'])
    },
    currentStreet() {
      // return _.clone(this.$store.state.address.currentStreet)
      // return this.$store.getters['address/currentStreet']
      return _.clone(this.$store.getters['address/currentStreet'])
    },
    fullAddressString() {
      return this.$store.getters['address/fullAddressString']
    }
  },
  watch: {
    buildingValue(newBuildingValue, oldBuildingValue) {
      this.$store.dispatch('address/setCurrentBuilding', newBuildingValue)
    },
    apartmentValue(newApartmentValue, oldApartmentValue) {
      this.$store.dispatch('address/setCurrentApartment', newApartmentValue)
    }
  },
  created() {
    this.allRegions = this.$store.getters['address/allRegions']
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
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
