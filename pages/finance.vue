<template>
  <el-container>
    <el-header>
      <el-page-header
        content="Добавление и редактирование финансовых инструментов"
        @back="goBack"
      >
      </el-page-header>
    </el-header>
    <el-main>
      <card-dialog
        v-if="dialogVisible"
        :card="cardToProcess"
        @confirm="onDialogConfirm"
        @cancel="onDialogCancel"
      ></card-dialog>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <div class="cards-placeholder">
            <card
              v-for="card in cards"
              :key="card.number"
              :card="card"
              @edit="onCardEdit"
              @delete="onCardDelete"
            ></card>
            <card-add @click="onAddCardClick"></card-add>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
// import _ from 'lodash'
import card from '../components/card'
import cardAdd from '../components/cardAdd'
import cardDialog from '../components/cardDialog'
export default {
  name: 'Finance',
  components: {
    card,
    cardAdd,
    cardDialog
  },
  data() {
    return {
      dialogVisible: false,
      addingCardName: '',
      addingCardNumber: '',
      cardToProcess: null
    }
  },
  computed: {
    cards() {
      // return _.clone(this.$store.getters['finance/cards'])
      return this.$store.getters['finance/cards']
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    onDialogCancel() {
      this.dialogVisible = false
    },
    onDialogConfirm(card, editMode) {
      this.dialogVisible = false
      if (editMode) {
        this.$store.dispatch('finance/editCard', card)
      } else {
        const cardAlreadyExists =
          this.cards.findIndex((item) => item.number === card.number) !== -1
        if (cardAlreadyExists) {
          this.$notify.error({
            title: 'Карта с таким номером уже существует',
            message:
              'Отредактируйте уже существующую карту или создайте новую с другим номером'
          })
        } else {
          this.$store.dispatch('finance/addCard', card)
        }
      }
    },
    openCardDialog(card) {
      this.dialogVisible = true
      this.cardToProcess = card
    },
    onCardEdit(card) {
      this.openCardDialog(card)
    },
    onCardDelete(card) {
      this.$store.dispatch('finance/removeCard', card)
    },
    onAddCardClick() {
      this.openCardDialog()
    },
    onAddCardConfirmClick() {
      this.dialogVisible = false
      this.$store.dispatch('finance/addCard', {
        name: this.addingCardName,
        isConfirmed: true,
        number: this.addingCardNumber
      })
    },
    handleClose(done) {
      this.$confirm('Отменить добавление карты?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.cards-placeholder {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  div {
    margin-left: 16px;
    &:nth-child(4n + 1) {
      margin-left: 0px;
    }
    &:nth-child(n + 5) {
      margin-top: 16px;
    }
  }
}
</style>
