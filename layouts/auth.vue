<template>
  <v-app dark>
    <v-main id="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
  layout: 'auth',
  data() {
    return {
    };
  },
};
</script>
