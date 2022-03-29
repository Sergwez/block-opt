<template>
  <div class="teaser container">
    <div class="text-h4 mt-8 mb-5">
      <slot>Газосиликатные блоки</slot>
    </div>

    <div class="teaser__items">
      <div
        v-for="product in products"
        :key="product.id"
        class="teaser__item"
      >
        <v-img
          class="teaser__item-img"
          :src="product.url"
          :alt="product.categoryName + ' ' + product.size.join('x')"
        >
          <template #placeholder>
            <v-sheet>
              <v-skeleton-loader
                type="card"
              />
            </v-sheet>
          </template>
        </v-img>
        <div class="text-h5 pt-2 teaser__item-title">
          {{ product.categoryName + ' ' + product.size.join('x') }}
        </div>
        <div class="body-1 teaser__item-description py-2">
          {{ product.vendorName }}
        </div>
        <div class="body-1 teaser__item-description py-2">
          Назначение: {{ product.targetName }}
        </div>
        <div class="body-1 teaser__item-description py-2">
          Плотность:
          <span
            v-for="(dens, index) in product.density"
            :key="dens"
          >
            {{ dens }}<span v-if="index != product.density.length-1">,</span>
          </span>
        </div>
        <div class="text-h5 teaser__item-title mb-3">
          Цена: {{ product.price }} ₽
        </div>
        <Callback
          class="secondary"
          tile
          depressed
          large
          :sendfrom="product.categoryName + ' ' + product.size.join('x')"
        >
          <template #title>
            {{ product.categoryName + ' ' + product.size.join('x') }}
          </template>
          <template #btntext>
            Заказать
          </template>
        </Callback>
      </div>
    </div>
    <div
      v-if="products.length === 0"
      class="teaser__empty"
    >
      Товары не найдены!
    </div>
    <!-- <div
      v-show="loading "
      class="teaser__items"
    >
      <v-skeleton-loader
        v-for="item in 16"
        :key="item"
        class=" teaser__item"
        type="image, article"
      />
    </div> -->

    <div v-show="!products">
      Ничего не найдено!
    </div>
  </div>
</template>

<script>
import Callback from '~/components/popups/Callback.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Products',
  components: { Callback },
  props: {
    mainpage: Boolean,
    category: String,
  },
  data() {
    return {
      // products:[]
    };
  },
  computed: {
    ...mapGetters({
      allProducts: 'products/allProducts',
      allCategories: 'categories/allCategories',
      categoryName: 'categories/name',
      targetName: 'targets/name',
      vendorName: 'vendors/name',
      loading: 'products/loading',
    }),
    products() {
      let products = JSON.parse(JSON.stringify(this.allProducts));

      if (this.mainpage) {
        products = products.filter((product) => product.mainPage === this.mainpage);
      }

      products = products.filter((product) => product.category === +this.category);

      products.forEach((product) => {
        this.$set(product, 'categoryName', this.categoryName(product.category).name);
        this.$set(product, 'targetName', this.targetName(product.target).name);
        this.$set(product, 'vendorName', this.vendorName(product.vendor).name);
      });
      return products;
    },
  },
  mounted() {
    this.getVendorsSnapshot();
    this.getCategoriesSnapshot();
    this.getTargetsSnapshot();
    this.getProductsSnapshot();
  },
  methods: {
    ...mapActions({
      getProductsSnapshot: 'products/getProductsSnapshot',
      getVendorsSnapshot: 'vendors/getVendorsSnapshot',
      getCategoriesSnapshot: 'categories/getCategoriesSnapshot',
      getTargetsSnapshot: 'targets/getTargetsSnapshot',
    }),
    ...mapMutations({ categoryProducts: 'products/categoryProducts' }),
  },
};
</script>

<style lang="scss" >
.teaser{
  display: flex;
  flex-direction: column;
  &__items{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    //для всех страниц
    @media (min-width: $sm) {
       grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: $md) {
       grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: $lg) {
       grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: $xl) {
       grid-template-columns: repeat(5, 1fr);
    }
    //для страниц каталога
    .catalog &{
      @media (min-width: $sm) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: $md) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: $lg) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: $xl) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  &__item{
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 3px;
    border: 1px solid #e4e4e4;
    transition: .3s;
    overflow: hidden;
    &:hover{
      box-shadow: 0 0 15px rgba(#D84315,.2);
    }
    *{
      z-index: 1;
      flex-grow: 1;
    }
    &-img{
      align-self: center;
      // max-width: fit-content;
      width: auto;
      height: 200px;
      transition: .3s;
      z-index: 0;
      &:hover{
        transform: scale(1.2);
      }
    }
    .v-btn{
      text-transform: none;
    }
  }
  &__all-products{
    align-self: center;
  }
  &__empty{
    font-size: 32px;
    text-align: center;
    margin-top:20px;
  }
}
.flip-list-move {
  transition: transform 1s;
}
</style>
