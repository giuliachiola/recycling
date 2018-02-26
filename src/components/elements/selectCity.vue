<template>
  <div>
    <!-- seleziona provincia -->
    <div class="mdl-selectfield mdl-js-selectfield">
        <select
          class="mdl-selectfield__select"
          id="myselect"
          name="myselect"
          v-model="provinceSelected"
          @change="getCities(provinceSelected)">

          <option value=""></option>
          <option
            v-for="province in provinces"
            :key="province.codice"
            :value="province.codice">
            {{ province.nome }}
          </option>

        </select>

      <label class="mdl-selectfield__label" for="myselect">Seleziona la provincia</label>
    </div>

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
      provinceSelected: undefined
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
      // disabled se non trova il file corrispondente del paese
    }
  }
}
</script>

<style lang="scss">

</style>
