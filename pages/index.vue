<template>
  <div class="container">
    <div>
      <h2 class="title">
        Test task 4 Euler
      </h2>
      <h3 class="subtitle">
        by Vagiz Magdeev
      </h3>
      <div class="links">
        <nuxt-link to="/address">Поиск и подстановка адреса</nuxt-link>
        <nuxt-link to="/finance"
          >Добавление и редактирование финансовых инструментов</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
