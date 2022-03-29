<template>
  <div>
    <LazyHydrate when-visible>
      <Stages />
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
    Stages: () => import('../components/Stages.vue'),
  },
  head() {
    return {
      title: 'Доставка и оплата',
      meta: [
        {
          hid: 'work',
          name: `${this.$info.site} - Доставка и оплата`,
          content: `${this.$info.site} - Доставка и оплата`,
        },
      ],
    };
  },
};
</script>
