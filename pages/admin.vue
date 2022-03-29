<template>
  <div>
    <Admin />
  </div>
</template>

<script>
import Admin from '../components/admin/Admin.vue';

export default {
  name: 'BlocksPage',
  components: { Admin },
  layout: 'admin',
  middleware: 'auth',
  head() {
    return {
      title: 'Панель управления',
      meta: [
        {
          hid: 'admin',
        },
      ],
    };
  },

};
</script>
