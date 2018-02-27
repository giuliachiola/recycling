<template>
  <div class="c-garbageList">
    <garbage-card
      v-for="g in garbage"
      :key="g.name"
      :garbage="g"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import garbageCard from '@elements/garbageCard.vue'

export default {
  name: 'garbageList',

  components: {
    garbageCard
  },

  computed: {
    ...mapState([
      'garbage'
    ])
  }
}
</script>

<style lang="scss">
  .c-garbageList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
