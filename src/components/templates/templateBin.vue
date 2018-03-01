<template>
  <div>
    <h1>Scheda materiale</h1>
    <bin-card :bin="bin"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import binCard from '@elements/binCard.vue'

export default {
  name: 'templateBin',

  components: {
    binCard
  },

  computed: {
    bin () {
      return this.bins.filter(bin => bin.name.toLowerCase() === this.$route.params.search.toLowerCase())[0]
    },

    ...mapState([
      'bins'
    ])
  }
}
</script>

<style lang="scss">
.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  // background: url('../assets/demos/welcome_card.jpg') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
