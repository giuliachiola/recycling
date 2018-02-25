<template>
  <div class="mdl-selectfield mdl-js-selectfield">
      <select id="myselect" name="myselect" class="mdl-selectfield__select">
        <option value=""></option>
        <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
      </select>
    <label class="mdl-selectfield__label" for="myselect">Scegli il comune</label>
  </div>
</template>

<script>
import dataCities from '@root/data/cities.json'

export default {
  name: 'SelectCity',

  components: {

  },

  data () {
    return {
      dataCities
    }
  },

  computed: {
    cities () {
      return dataCities.cities.filter(city => city.name)
    }
  }
}
</script>

<style lang="scss">

</style>
