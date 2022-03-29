<template>
  <div
    div
    class="d-lg-none overflow-hidden mb-4"
  >
    <v-app-bar
      color="white"
      fixed
      class="mobile-menu"
    >
      <v-icon
        large
        color="gray darken-2 px-0"
        @click="drawer = true"
      >
        {{ mdiMenu }}
      </v-icon>
      <Logo />
      <a
        class="text-decoration-none"
        :href="'https://api.whatsapp.com/send?phone=' + $info.phone"
      >
        <v-icon
          large
          color="gray darken-2 px-0"
        >{{ mdiWhatsapp }}</v-icon>
      </a>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <Menu />
      <v-divider />
      <v-list>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              Режим работы:
            </v-list-item-title>
            <v-list-item-subtitle>
              пн-пт: 9.00 -18.00
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              Телефон для заказа:
            </v-list-item-title>
            <v-list-item-subtitle>
              +7 995 449 70 07
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mdiMenu, mdiWhatsapp } from '@mdi/js';
import Logo from '~/components/logo.vue';
import Menu from '~/components/Menu.vue';

export default {
  name: 'MobileHeader',
  components: { Logo, Menu },
  data() {
    return {
      mdiMenu,
      mdiWhatsapp,
      drawer: false,
      group: null,
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style lang="scss">
.mobile-menu{

  .v-toolbar__content{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
