<template>
  <div class="container">
    <el-dialog
      :title="card ? 'Редактирование карты' : 'Добавление карты'"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <el-input
        v-model="addingCardName"
        placeholder="Название карты"
      ></el-input>
      <el-input v-model="addingCardNumber" placeholder="Номер карты"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">Отмена</el-button>
        <el-button type="primary" @click="confirmClick">
          {{ card ? 'Редактировать' : 'Добавить' }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'cardDialog',
  mounted() {
    console.log('cardDialog::mounted:\tcard: ', this.card)
    this.dialogVisible = true
    this.addingCardName = this.card ? this.card.name : ''
    this.addingCardNumber = this.card ? this.card.number : ''
    this.editMode = !!this.card
  },
  props: {
    card: Object
  },
  data() {
    return {
      dialogTitle: '',
      dialogVisible: null,
      addingCardName: '',
      addingCardNumber: '',
      editMode: false
    }
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
