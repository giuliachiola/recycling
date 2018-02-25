<template>

<div class="mdl-layout mdl-js-layout">

  <layoutHeader />
  <layoutDrawer />

  <main class="mdl-layout__content l-grid--centerX">

    <selectCity/>
    <searchGarbage />

  </main>
</div>
</template>

<script>
import layoutHeader from '@layout/layoutHeader.vue'
import layoutDrawer from '@layout/layoutDrawer.vue'
import searchGarbage from '@elements/searchGarbage.vue'
import selectCity from '@elements/selectCity.vue'

export default {
  name: 'TemplateHome',

  components: {
    layoutHeader,
    layoutDrawer,
    searchGarbage,
    selectCity
  }
}
</script>

<style lang="scss">
  .l-grid--centerX {
    display: grid;
    justify-content: center;
  }
</style>
