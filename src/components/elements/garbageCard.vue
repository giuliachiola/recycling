<template>
    <!-- Square card -->
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand" :style="cardTitleStyle">
        <h2 class="mdl-card__title-text">{{ garbage.name }}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{ description }}
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Vai alla scheda
        </a>
      </div>
    </div>
</template>

<script>
import { materialColors } from '@root/data/variables.js'

export default {
  name: 'garbageCard',

  props: {
    garbage: {
      type: Object,
      default: () => {}
    }
  },

  components: {

  },

  data () {
    return {
      materialColors
    }
  },

  computed: {
    cardTitleStyle () {
      let randomColor = this.materialColors[Math.floor(Math.random() * this.materialColors.length)]
      return { backgroundColor: randomColor }
    },

    description () {
      return this.garbage.description.slice(0, 180) + ' [...]'
    }
  }
}
</script>

<style lang="scss">
.demo-card-square.mdl-card {
  width: 320px;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
}
</style>
