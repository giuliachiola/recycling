<template>
  <div class="mdl-selectfield mdl-js-selectfield">
      <select id="myselect" name="myselect" class="mdl-selectfield__select">
        <option value=""></option>
        <option v-for="city in citiesA" :key="city.id" :value="city.id">{{ city.name }}</option>
      </select>
    <label class="mdl-selectfield__label" for="myselect">Scegli il comune</label>
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
    citiesA () {
      // return dataCities.cities.filter(city => city.name)
      console.log(this.cities)
      return this.cities
    },

    ...mapState([
      'cities'
    ])
  }
}
</script>

<style lang="scss">

</style>
