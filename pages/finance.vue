<template>
  <div class="container">
    <card-dialog
      v-if="dialogVisible"
      :card="cardToProcess"
      @confirm="onDialogConfirm"
      @cancel="onDialogCancel"
    ></card-dialog>
    <card
      v-for="card in cards"
      :key="card.number"
      :card="card"
      @edit="onCardEdit"
      @delete="onCardDelete"
    ></card>
    <card-add @click="onAddCardClick"></card-add>
  </div>
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
  methods: {
    onDialogCancel() {
      console.log('onDialogCancel()')
      this.dialogVisible = false
    },
    onDialogConfirm(card, editMode) {
      console.log('onDialogConfirm:\t', card)
      this.dialogVisible = false
      if (editMode) {
        console.log('the card is supposed to be edited')
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
      console.log('onCardEdit:\t', card)
      this.openCardDialog(card)
    },
    onCardDelete(card) {
      console.log('onCardDelete:\t', card)
      this.$store.dispatch('finance/removeCard', card)
    },
    onAddCardClick() {
      console.log('onAddCardClick')
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
  },
  computed: {
    cards() {
      // return _.clone(this.$store.getters['finance/cards'])
      return this.$store.getters['finance/cards']
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
