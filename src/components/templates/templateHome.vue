<template>

<div class="mdl-layout mdl-js-layout">

  <layoutHeader />
  <layoutDrawer />

  <main class="mdl-layout__content l-grid--centerX">

    <selectCity/>
    <garbageSearch />
    <garbageList />

  </main>
</div>
</template>

<script>
import layoutHeader from '@layout/layoutHeader.vue'
import layoutDrawer from '@layout/layoutDrawer.vue'
import garbageSearch from '@elements/garbageSearch.vue'
import garbageList from '@elements/garbageList.vue'
import selectCity from '@elements/selectCity.vue'

export default {
  name: 'TemplateHome',

  components: {
    layoutHeader,
    layoutDrawer,
    garbageSearch,
    garbageList,
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
