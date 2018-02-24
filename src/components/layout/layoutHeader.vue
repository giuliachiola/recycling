<template>
  <header class="mdl-layout__header mdl-layout__header--waterfall">
    <!-- Top row, always visible -->
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Dove lo butto?</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
        <label class="mdl-button mdl-js-button mdl-button--icon"
               for="waterfall-exp">
          <i class="material-icons">cerca</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample" id="waterfall-exp">
        </div>
      </div>
    </div>
    <!-- Bottom row, not visible on scroll -->
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer"></div>

      <!-- Navigation -->
      <nav class="mdl-navigation">
        <router-link
        v-for="navLink in navLinks"
        :key="navLink.linkText"
        :to="navLink.linkTo"
        class="mdl-navigation__link">
        {{ navLink.linkText }}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',

  components: {
  },

  data () {
    return {
      navLinks: [
        {
          linkTo: '#',
          linkText: 'Link utili'
        },
        {
          linkTo: '#',
          linkText: 'Contribuisci'
        },
        {
          linkTo: '#',
          linkText: 'Contatti'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
