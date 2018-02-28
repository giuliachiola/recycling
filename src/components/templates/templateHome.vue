<template>

<div class="mdl-layout mdl-js-layout">

  <layoutHeader />
  <layoutDrawer />

  <main class="mdl-layout__content l-main__wrapper">

    <selectCity class="l-component--centerX"/>

    <garbageSearch class="l-component--centerX"/>
    <garbageList />

    <!-- <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      Cerca il tuo comune per scoprire orari e differenze con il default sopra
    </button> -->

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
  .l-component--centerX {
    display: flex;
    justify-content: center;
  }

  .l-main__wrapper {
    max-width: 95%;
    margin: auto;
    display: block;
  }
</style>
