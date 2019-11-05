<template>
  <div class="container">
    <el-dialog
      :title="card ? 'Редактирование карты' : 'Добавление карты'"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>Введите данные карты:</span>
      <el-input
        v-model="addingCardName"
        v-mask="rusTokens"
        placeholder="Название карты"
      ></el-input>
      <el-input
        v-model="addingCardNumber"
        v-mask="'####-####-####-####'"
        placeholder="Номер карты"
        :class="{ notDefaultCardIcon: cardBrandName !== '' }"
      >
        <i
          slot="suffix"
          class="el-input__icon el-icon-bank-card"
          :style="cardTypeDeterminedStyle"
        ></i>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">Отмена</el-button>
        <el-button
          type="primary"
          :disabled="disableSubmit"
          @click="confirmClick"
        >
          {{ card ? 'Сохранить' : 'Добавить' }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
  name: 'CardDialog',
  directives: { mask },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rusTokens: {
        mask: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
        tokens: {
          F: {
            pattern: /[а-яА-ЯёЁ]+/
          }
        }
      },
      cardBrandName: '',
      cardBrandLogoOriginalSvg: '',
      cardTypeDeterminedStyle: {},
      cardFirstDigits: '',
      dialogTitle: '',
      dialogVisible: null,
      addingCardName: '',
      addingCardNumber: '',
      editMode: false
    }
  },
  computed: {
    disableSubmit() {
      return this.addingCardNumber.length < 19 || this.addingCardName.length < 1
    }
  },
  watch: {
    addingCardNumber(newAddingCardNumber, oldAddingCardNumber) {
      if (
        this.cardFirstDigits !==
          newAddingCardNumber.replace(/-/g, '').substring(0, 6) &&
        newAddingCardNumber.length > 6
      ) {
        this.cardFirstDigits = newAddingCardNumber
          .replace(/-/g, '')
          .substring(0, 6)
        axios
          .get(
            `https://api.cardinfo.online?input=${newAddingCardNumber.replace(
              /-/g,
              ''
            )}&apiKey=0aa2dbd380457c4482f093fce89b61de`
          )
          .then((response) => {
            if (response.data.brandName) {
              this.cardBrandName = response.data.brandName
              this.cardBrandLogoOriginalSvg = response.data.brandLogoOriginalSvg
              this.cardTypeDeterminedStyle = {
                'background-image':
                  'url(' + `'${this.cardBrandLogoOriginalSvg}'` + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
                'background-position': 'center'
              }
            } else {
              this.cardTypeDeterminedStyle = {}
              this.cardBrandName = ''
              this.cardBrandLogoOriginalSvg = ''
            }
          })
      }
    }
  },
  mounted() {
    this.dialogVisible = true
    this.addingCardName = this.card ? this.card.name : ''
    this.addingCardNumber = this.card ? this.card.number : ''
    this.editMode = !!this.card
  },
  methods: {
    confirmClick() {
      this.$emit(
        'confirm',
        {
          isConfirmed: false,
          name: this.addingCardName,
          number: this.addingCardNumber
        },
        this.editMode
      )
      this.dialogVisible = false
    },
    handleClose() {
      this.$emit('cancel')
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
}
.notDefaultCardIcon {
  span {
    span {
      i:before {
        content: '' !important;
      }
    }
  }
}
.el-input {
  margin-top: 16px;
}
</style>
