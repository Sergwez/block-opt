<template>
  <div>
    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Delivery-info />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {

  name: 'BlocksPage',
  components: {
    LazyHydrate,
    DeliveryInfo: () => import('../components/info-form/Delivery-info.vue'),
    About: () => import('../components/About.vue'),
  },
  head() {
    return {
      title: 'Контакты',
      meta: [
        {
          hid: 'contacts',
          name: `${this.$info.site} - Контакты`,
          content: `${this.$info.site} - Контакты`,
        },
      ],
    };
  },
};
</script>
