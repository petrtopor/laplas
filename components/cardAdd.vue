<template>
  <div class="container">
    <div class="card">
      <div class="plus-sign">
        <i class="el-icon-plus" @click="onClick"></i>
      </div>
      <div class="bottom-label">
        <p>{{ labelText }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cardAdd',
  data() {
    return {
      labelText: 'Добавить карту'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
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
    .plus-sign {
      margin-top: 32px;
      cursor: pointer;
      i {
        transform: scale(4);
      }
      &:hover {
        i {
          transform: scale(6);
        }
      }
    }
  }
}
</style>
