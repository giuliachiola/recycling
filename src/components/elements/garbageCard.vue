<template>
    <!-- Square card -->
    <div class="c-card demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand c-card__title" :style="cardColor">
        <h2 class="mdl-card__title-text c-card__titleText">{{ garbage.name }}</h2>
        <img :src="imageSrc" class="c-card__titleImage" alt="">
      </div>
      <div class="mdl-card__supporting-text c-card__description">
        <p v-html="garbage.description"></p>
        <router-link :to="{ name: 'templateBin', params: { search: garbageBinLink } }"
          class="mdl-button mdl-button--raised c-card__descriptionButton"
          :style="cardColor">
          {{ garbageBinName }}
        </router-link>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Vai alla scheda
        </a>
      </div>
    </div>
</template>

<script>
import { amber, green, indigo, cyan, brown, gray, pink, red } from '@root/data/variables.js'

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
      amber, green, indigo, cyan, brown, gray, pink, red
    }
  },

  computed: {
    cardColor () {
      let binColor = []
      let randomColor
      if (this.garbage.bin === 0) {
        randomColor = '#000000'
      } else {
        if (this.garbage.bin === 1) { binColor = this.indigo } // CARTA
        if (this.garbage.bin === 2) { binColor = this.amber } // PLASTICA
        if (this.garbage.bin === 3) { binColor = this.green } // VETRO
        if (this.garbage.bin === 4) { binColor = this.cyan } // ALLUMINIO
        if (this.garbage.bin === 6) { binColor = this.brown } // ORGANICO
        if (this.garbage.bin === 7) { binColor = this.orange } // POTATURE
        if (this.garbage.bin === 8) { binColor = this.gray } // INDIFFERENZIATO
        if (this.garbage.bin === 9) { binColor = this.red } // RAEE
        if (this.garbage.bin === 10) { binColor = this.pink } // RIFIUTI SPECIALI
        randomColor = binColor[5]
      }
      return { backgroundColor: randomColor }
    },

    imageSrc () {
      if (this.garbage.src) {
        return `static/img/${this.garbage.src}.png`
      }
    },

    garbageBinName () {
      if (this.garbage.bin === 0) { return 'n/a' } // NON DISPONIBILE
      if (this.garbage.bin === 1) { return 'Carta' } // CARTA
      if (this.garbage.bin === 2) { return 'Plastica' } // PLASTICA
      if (this.garbage.bin === 3) { return 'Vetro' } // VETRO
      if (this.garbage.bin === 4) { return 'Alluminio' } // ALLUMINIO
      if (this.garbage.bin === 6) { return 'Organico' } // ORGANICO
      if (this.garbage.bin === 7) { return 'Sfalci e potature' } // POTATURE
      if (this.garbage.bin === 8) { return 'Indifferenziato' } // INDIFFERENZIATO
      if (this.garbage.bin === 9) { return 'RAEE' } // RAEE
      if (this.garbage.bin === 10) { return 'Rifiuti speciali' } // RIFIUTI SPECIALI
    },

    garbageBinLink () {
      if (this.garbage.bin === 0) { return '#' } // NON DISPONIBILE
      if (this.garbage.bin === 1) { return 'carta' } // CARTA
      if (this.garbage.bin === 2) { return 'plastica' } // PLASTICA
      if (this.garbage.bin === 3) { return 'vetro' } // VETRO
      if (this.garbage.bin === 4) { return 'alluminio' } // ALLUMINIO
      if (this.garbage.bin === 6) { return 'organico' } // ORGANICO
      if (this.garbage.bin === 7) { return 'sfalci-e-potature' } // POTATURE
      if (this.garbage.bin === 8) { return 'indifferenziato' } // INDIFFERENZIATO
      if (this.garbage.bin === 9) { return 'raee' } // RAEE
      if (this.garbage.bin === 10) { return 'rifiuti-speciali' } // RIFIUTI SPECIALI
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
  word-break: break-word;
}

.c-card__titleImage {
  position: absolute;
  right: 16px;
  bottom: 8px;
  max-height: 80%;
  max-width: 50%;
}

.c-card__description {
  min-height: 7em;
  position: relative;
}

.c-card .c-card__descriptionButton {
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: white;
}
</style>
