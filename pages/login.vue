<template>
  <AuthForm />
</template>

<script>

import AuthForm from '../components/AuthForm.vue';

export default {
  components: { AuthForm },
  layout: 'auth',
  head() {
    return {
      title: 'Авторизация',
      meta: [
        {
          hid: 'auth',
        },
      ],
    };
  },
};
</script>
