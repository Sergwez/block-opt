<template>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true">
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <slot name="title" />
      </v-toolbar-title>
      <div class="ml-auto">
        {{ $store.getters['auth/activeUser'].email }}
        ( <a
          class="white--text text-decoration-underline"
          @click="logout()"
        >выход</a> )
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="changeQuery('products')">
            <v-list-item-title>Товары</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ mdiChevronRight }}</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item @click="changeQuery('categories')">
            <v-list-item-title>Категории</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ mdiChevronRight }}</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item @click="changeQuery('targets')">
            <v-list-item-title>Тип товара</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ mdiChevronRight }}</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item @click="changeQuery('vendors')">
            <v-list-item-title>Производители</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ mdiChevronRight }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <ResetDB />
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mdiChevronRight, mdiMenu } from '@mdi/js';
import ResetDB from '~/components/admin/ResetDB.vue';

export default {
  components: { ResetDB },
  data() {
    return {
      drawer: false,
      group: null,
      mdiChevronRight,
      mdiMenu,
    };
  },
  methods: {
    changeQuery(docs) {
      this.$router.push({ path: 'admin', query: { docs } });
    },
    async logout() {
      try {
        await this.$fire.auth.signOut();
        this.$router.push('/login');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
