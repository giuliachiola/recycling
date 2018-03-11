<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Materiali</span>
    <nav class="mdl-navigation">
      <router-link
        v-for="bin in bins"
        :key="bin.name"
        :to="{ name: 'templateBin', params: { search: bin.name.toLowerCase() } }"
        class="mdl-navigation__link">
        {{ bin.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LayoutDrawer',

  components: {
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapState([
      'bins'
    ])
  }
}
</script>

<style lang="scss">

</style>
