<template>
    <!-- Square card -->
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand c-card__title" :style="cardTitleStyle">
        <h2 class="mdl-card__title-text c-card__titleText">{{ garbage.name }}</h2>
        <img :src="imageSrc" class="c-card__titleImage" alt="">
      </div>
      <div class="mdl-card__supporting-text c-card__description">
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
      let binColor
      if (this.garbage.bin === 1) {
        binColor = 'yellow'
      }
      let randomColor = this.materialColor.binColor[Math.floor(Math.random() * this.materialColor.binColor.length)]
      return { backgroundColor: randomColor }
    },

    imageSrc () {
      // if (this.garbage.src) {
      //   return require(`../../assets/img/${this.garbage.src}.png`)
      // }
    },

    description () {
      return this.garbage.description.slice(0, 160) + ' [...]'
    }
  }
}
</script>

<style lang="scss">
.demo-card-square.mdl-card {
  width: auto;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
}

.c-card__title {
  padding: 0;
  position: relative;
  overflow: hidden;
}

.c-card__titleText {
  padding: 16px;
  max-width: 40%;
}

.c-card__titleImage {
  position: absolute;
  right: 16px;
  bottom: 8px;
  max-height: 80%;
  max-width: 50%;
}

.c-card__description {
  height: 5em;
}
</style>
