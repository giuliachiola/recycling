<template>
  <div class="c-garbageList">
    <garbage-card
      v-for="g in filteredList"
      :key="g.name"
      :garbage="g"/>
  </div>
</template>

<script>
import garbageCard from '@elements/garbageCard.vue'

export default {
  name: 'garbageList',

  components: {
    garbageCard
  },

  props: {
    filteredList: {
      type: Array,
      default: () => []
    }
  },

  computed: {
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
