<template>
  <div>
    <!-- seleziona provincia -->
    <div class="mdl-selectfield mdl-js-selectfield">
        <select id="myselect" name="myselect" class="mdl-selectfield__select">
          <option value=""></option>
          <option v-for="province in provinces" :key="province.codice" :value="province.codice">{{ province.nome }}</option>
        </select>
      <label class="mdl-selectfield__label" for="myselect">Seleziona la provincia</label>
    </div>

    <button @click="getCities(100)">TAP ME</button>

    <!-- seleziona comune -->
    <div class="mdl-selectfield mdl-js-selectfield">
        <select id="myselect" name="myselect" class="mdl-selectfield__select">
          <option value=""></option>
          <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.nome }}</option>
        </select>
      <label class="mdl-selectfield__label" for="myselect">Scegli il comune</label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SelectCity',

  components: {

  },

  data () {
    return {
    }
  },

  computed: {
    ...mapState([
      'provinces', 'cities'
    ])
  },

  methods: {
    getCities (provinceId) {
      this.$store.dispatch('getCities', provinceId)
    },
  }
}
</script>

<style lang="scss">

</style>
