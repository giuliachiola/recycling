<template>

  <div>
    <!-- Textfield with Floating Label -->
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="sample3">
        <label class="mdl-textfield__label" for="sample3">Cerca riufiuto</label>
      </div>
      <i class="material-icons">search</i>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'searchGarbage',

  components: {
  },

  computed: {
    garbageList () {
      return this.garbage
    },

    ...mapState([
      'garbage'
    ])
  }
}
</script>

<style lang="scss">

</style>
