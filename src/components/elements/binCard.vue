<template>
  <div>
    <h2>{{ bin.name }}</h2>
    <!-- Wide card with share menu button -->
    <div class="demo-card-wide mdl-card mdl-shadow--2dp c-binCard">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome</h2>
        <img class="c-binCard__image" :src="imageSrc" alt="">
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Get Started
        </a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'binCard',

  props: {
    bin: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    imageSrc () {
      return `static/img/${this.bin.src}.png`
    }
  }
}
</script>

<style lang="scss">
  .c-binCard {
    width: 80%;
    margin: auto;
  }

  .c-binCard__image {
    max-height: 95%;
  }
</style>
