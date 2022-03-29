<template>
  <div>
    <div class="products catalog">
      <LazyHydrate when-visible>
        <OtherProducts />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'BlocksPage',
  components: {
    LazyHydrate,
    OtherProducts: () => import('../components/OtherProducts.vue'),
  },
  head() {
    return {
      title: 'Купить кирпичи и сухие смеси оптом',
      meta: [
        {
          hid: 'bricks',
          name: `${this.$info.site} - Кирпичи и сухие смеси оптом`,
          content: `${this.$info.site} - Кирпичи и сухие смеси оптом`,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.products{
  display: flex;
}
</style>
