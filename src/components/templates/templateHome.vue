<template>

<div class="demo-layout-waterfall mdl-layout mdl-js-layout">

  <layoutHeader />
  <layoutDrawer />

  <main class="mdl-layout__content">
    <div class="page-content">

      <searchBar />

    </div>
  </main>
</div>
</template>

<script>
import layoutHeader from '@layout/layoutHeader.vue'
import layoutDrawer from '@layout/layoutDrawer.vue'
import searchBar from '@elements/searchBar.vue'

export default {
  name: 'TemplateHome',

  components: {
    layoutHeader,
    layoutDrawer,
    searchBar
  }
}
</script>

<style lang="scss">

</style>
