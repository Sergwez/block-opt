<template>
  <div>
    <FirstScreen />
    <Vendors />

    <LazyHydrate when-visible>
      <Products
        category="0"
        mainpage
      >
        Газосиликатные блоки
      </Products>
    </LazyHydrate>
    <router-link
      to="/blocks"
      class="text-decoration-none"
    >
      <div>
        <v-btn
          class="d-block mx-auto mt-4 mb-4"
          color="secondary"
          outlined
          tile
          large
        >
          Посмотреть все блоки
        </v-btn>
      </div>
    </router-link>
    <!-- <LazyHydrate when-visible>
      <Products
        category="1"
        mainpage
      >
        Рабочие кирпичи
      </Products>
    </LazyHydrate> -->
    <!-- <router-link
      to="/bricks"
      class="text-decoration-none"
    >
      <div>
        <v-btn
          class="d-block mx-auto mt-4 mb-4"
          color="secondary"
          outlined
          tile
          large
        >
          Посмотреть все кирпичи
        </v-btn>
      </div>
    </router-link> -->
    <LazyHydrate when-visible>
      <MoreInfo />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import FirstScreen from '../components/First-screen.vue';
import Vendors from '../components/Vendors.vue';

export default {
  name: 'IndexPage',
  components: {
    LazyHydrate,
    FirstScreen,
    Vendors,
    Products: () => import('../components/Products.vue'),
    MoreInfo: () => import('../components/info-form/More-info.vue'),
  },
  data() {
    return {
    };
  },
  head() {
    return {
      title: 'Купить строительные блоки и кирпичи оптом',
      meta: [
        {
          hid: 'index',
          name: `${this.$info.site} - Строительные блоки и кирпичи оптом`,
          content: `${this.$info.site} - Строительные блоки и кирпичи оптом`,
        },
      ],
    };
  },
};
</script>
