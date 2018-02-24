<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Materiali</span>
    <nav class="mdl-navigation">
      <router-link
        v-for="navLink in navLinks"
        :key="navLink.linkText"
        :to="navLink.linkTo"
        class="mdl-navigation__link">
        {{ navLink.linkText }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutDrawer',

  components: {
  },

  data () {
    return {
      navLinks: [
        {
          linkTo: '#',
          linkText: 'Carta'
        },
        {
          linkTo: '#',
          linkText: 'Plastica'
        },
        {
          linkTo: '#',
          linkText: 'Vetro'
        },
        {
          linkTo: '#',
          linkText: 'Alluminio'
        },
        {
          linkTo: '#',
          linkText: 'Organico'
        },
        {
          linkTo: '#',
          linkText: 'Indifferenziato'
        },
        {
          linkTo: '#',
          linkText: 'Materiali RAEE'
        }
      ]
    }
  },

  computed: {
  }
}
</script>

<style lang="scss">

</style>
