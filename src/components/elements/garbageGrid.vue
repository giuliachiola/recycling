<template>
  <div>
    <garbageSearch
        class="l-component--centerX"
        :uiKeyword.sync="uiKeyword"
      />

      <garbageList
        :filteredList="filteredList"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import garbageSearch from '@elements/garbageSearch.vue'
import garbageList from '@elements/garbageList.vue'

export default {
  name: 'GarbageGrid',

  components: {
    garbageSearch,
    garbageList
  },

  data () {
    return {
      uiKeyword: this.$route.params.search || ''
    }
  },

  computed: {
    filteredList () {
      return this.garbage.filter(g => {
        return g.name.toLowerCase().includes(this.uiKeyword.toLowerCase())
      })
    },

    ...mapState([
      'garbage'
    ])
  }
}
</script>
