<template>
  <v-app dark>
    <v-main id="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  layout: 'admin',
  props: {

  },
  data() {
    return {

    };
  },
  head() {

  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
