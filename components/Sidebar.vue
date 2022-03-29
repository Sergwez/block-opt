<template>
  <div>
    <div class="sidebar">
      <v-app-bar
        hide-on-scroll
        bottom
        fixed
        flat
        color="transparent"
        class="d-md-none"
      >
        <v-badge
          bordered
          color="error"
          :content="counter"
          :value="counter"
          overlap
          class="w-100 mx-auto "
        >
          <v-btn
            color="primary"
            large
            @click="filters = true"
          >
            <v-icon>{{ mdiFilter }}</v-icon>
            Фильтры
          </v-btn>
        </v-badge>
      </v-app-bar>
      <v-dialog
        v-model="filters"
        fullscreen
        class="white"
        transition="dialog-bottom-transition"
      >
        <div class="px-5 white d-flex flex-column">
          <v-btn
            icon
            large
            class="align-self-end"
            @click="filters = false"
          >
            <v-icon>{{ mdiClose }}</v-icon>
          </v-btn>
          <Filters @filter-counter="counter = $event" />
          <v-btn
            color="primary"
            class="my-6"
            large
            @click="filters = false"
          >
            Применить
          </v-btn>
        </div>
      </v-dialog>
      <div class="d-none d-md-block">
        <Filters />
      </div>
    </div>
  </div>
</template>

<script>
import { mdiClose, mdiFilter } from '@mdi/js';
import Filters from '~/components/Filters.vue';

export default {
  name: 'Sidebar',
  components: { Filters },
  data() {
    return {
      mdiClose,
      mdiFilter,
      filters: false,
      counter: 0,
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style lang="scss">
// .sticky-btn{
//   display: flex;

// }
.sidebar{
  @media (min-width: $md){
    width:280px;
    margin-right: 16px;
  }
  @media (min-width: $lg){
    width:300px;
  }

}
</style>
