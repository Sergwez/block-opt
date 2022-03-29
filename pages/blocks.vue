<template>
  <div>
    <div class="products catalog">
      <LazyHydrate when-visible>
        <Sidebar />
      </LazyHydrate>
      <Products category="0">
        Газосиликатные блоки
      </Products>
    </div>
    <LazyHydrate when-visible>
      <MoreInfo />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'BlocksPage',
  components: {
    LazyHydrate,
    Products: () => import('../components/Products.vue'),
    MoreInfo: () => import('../components/info-form/More-info.vue'),
    Sidebar: () => import('../components/Sidebar.vue'),
  },
  head() {
    return {
      title: 'Купить строительные блоки оптом',
      meta: [
        {
          hid: 'blocks',
          name: `${this.$info.site} - Строительные блоки оптом`,
          content: `${this.$info.site} - Строительные блоки оптом`,
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
