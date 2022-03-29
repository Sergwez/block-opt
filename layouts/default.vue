<template>
  <v-app
    light
    class="content"
  >
    <Header />
    <Menu class="d-none d-lg-block" />

    <v-main id="main">
      <v-container class="py-0">
        <Nuxt />
      </v-container>
    </v-main>
    <ScreenLoader v-show="showLoader" />

    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import ScreenLoader from '../components/ScreenLoader.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header, Menu, Footer, ScreenLoader,
  },
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    this.showLoader = false;
  },
};
</script>
<style lang="scss" scoped>
.v-application{
    font-family: 'Montserrat', sans-serif;
}
.content{
  overflow: hidden;
}

</style>
