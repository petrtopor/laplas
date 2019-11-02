<template>
  <div class="container">
    <div class="card">
      <div class="top">
        <div class="name-placeholder">
          <span>
            {{ card.name }}
          </span>
        </div>
        <div class="maintenance-placeholder">
          <div class="edit-button" @click="onEditButtonClick">
            <i class="el-icon-edit"></i>
          </div>
          <div class="delete-button" @click="onDeleteButtonClick">
            <i class="el-icon-delete"></i>
          </div>
        </div>
      </div>
      <div class="confirmation-placeholder">
        <p>{{ card.isConfirmed ? 'Подтверждена' : 'Не подтверждена' }}</p>
      </div>
      <div class="number">
        <p>{{ card.number }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  methods: {
    onEditButtonClick() {
      this.$emit('edit', this.card)
    },
    onDeleteButtonClick() {
      this.$emit('delete', this.card)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 16px;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 256px;
    height: 128px;
    border: solid 1px;
    border-radius: 12px;
    padding: 8px;
    div {
      width: 100%;
    }
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .name-placeholder {
        width: fit-content;
      }
      .maintenance-placeholder {
        display: flex;
        flex-direction: row;
        width: 40px;
        justify-content: space-between;
        div {
          cursor: pointer;
          &:hover {
            i {
              transform: scale(1.2);
            }
          }
        }
      }
    }
    .confirmation-placeholder {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .number {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
