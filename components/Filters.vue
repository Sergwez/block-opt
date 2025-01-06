<template>
  <div>
    <div class="filters">
      <div class="text-h5 mt-13 mb-5">
        Сортировка
      </div>
      <v-select
        v-model="filter.sort"
        :items="sort"
        label="Сортировать"
        outlined
        clearable
        single-line
        @change="changeFilter()"
      />
      <div class="text-h5 mt-13 mb-5">
        Фильтры
      </div>
      <div class="subtitle-1">
        Завод
      </div>
      <v-select
        v-model="filter.vendor"
        :items="$store.getters['vendors/allVendors']"
        item-text="name"
        item-value="id"
        label="Выберите завод"
        outlined
        clearable
        single-line
        multiple
        @change="changeFilter()"
      >
        <template #item="{item, attrs, on}">
          <v-list-item
            v-slot="{ active }"
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>
              <v-checkbox
                :ripple="false"
                :input-value="active"
                :off-icon="mdiCheckboxBlankOutline"
                :on-icon="mdiCheckboxOutline"
              />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-row
                  no-gutters
                  align="center"
                >
                  {{ item.name }}
                </v-row>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
      <div class="subtitle-1">
        Тип
      </div>
      <v-select
        v-model="filter.target"
        :items="$store.getters['targets/allTargets']"
        item-text="name"
        item-value="id"
        label="Выберите тип"
        outlined
        clearable
        single-line
        @change="changeFilter()"
      />
      <div class="subtitle-1">
        Размеры
      </div>
      <v-select
        v-for="count, index in countSize"
        :key="count"
        v-model="filter.size[index]"
        :items="sizes"
        clearable
        label="Размер стороны"
        outlined
        single-line
        suffix="mm"
        @change="changeFilter()"
      />
      <div
        v-if="countSize != 3"
        class="subtitle-2 text-decoration-underline pointer"
        @click="countSize != 3 ? countSize = countSize + 1 : ''"
      >
        Добавить еще размер
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { mdiCheckboxBlankOutline, mdiCheckboxOutline } from '@mdi/js';

export default {
  name: 'Sidebar',
  data() {
    return {
      mdiCheckboxBlankOutline,
      mdiCheckboxOutline,
      countSize: 1,
      sort: [
        'По умолчанию',
        'Сначала дороже',
        'Сначала дешевле',
      ],
      filter: {
        sort: [],
        vendor: '',
        target: '',
        size: [],
      },
    };
  },
  computed: {
    sizes() {
      const arr = this.$store.getters['products/allProducts'].reduce((acc, item) => [...item.size, ...acc], []);
      const unicSize = [...new Set(arr)];
      return unicSize;
    },
  },
  async mounted() {
    await this.$fire.firestoreReady();
    this.getProducts();
    this.getVendors();
    this.getCategories();
    this.getTargets();
  },
  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
      getVendors: 'vendors/getVendors',
      getCategories: 'categories/getCategories',
      getTargets: 'targets/getTargets',
    }),
    ...mapMutations({ filterProducts: 'products/filterProducts' }),
    async changeFilter() {
      await this.getProducts();
      this.filterProducts(this.filter);
      let counter = 0;
      Object.keys(this.filter).forEach((element) => {
        if (this.filter[element] && this.filter[element][0]) {
          counter += 1;
        }
        this.$emit('filter-counter', counter);
      });
    },
  },
};
</script>
<style lang="scss">

</style>
