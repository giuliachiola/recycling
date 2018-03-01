<template>

  <div>
    <!-- Textfield with Floating Label -->
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          class="mdl-textfield__input"
          type="text"
          id="keywordField"
          v-model="uiKeywordField"
          @input="updateUiKeyword">
        <label class="mdl-textfield__label" for="keywordField">Cerca riufiuto</label>
      </div>
      <i class="material-icons">search</i>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GarbageSearch',

  components: {
  },

  data () {
    return {
      uiKeywordField: this.uiKeyword
    }
  },

  computed: {
    garbageList () {
      return this.garbage
    },

    ...mapState([
      'garbage'
    ])
  },

  watch: {
    uiKeyword () {
      this.uiKeywordField = this.uiKeyword
    }
  },

  methods: {
    updateUiKeyword () {
      this.$emit('update:uiKeyword', this.uiKeywordField)
    }
  }
}
</script>

<style lang="scss">

</style>
