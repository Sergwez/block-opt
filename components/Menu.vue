<template>
  <div class="menu container">
    <v-list class="menu__group">
      <router-link
        to="/"
      >
        <v-list-item class="menu__item">
          Главная
        </v-list-item>
      </router-link>
      <router-link
        to="/blocks"
      >
        <v-list-item class="menu__item">
          Каталог газосиликатных блоков
        </v-list-item>
      </router-link>
      <router-link
        to="/bricks"
      >
        <v-list-item class="menu__item">
          Кирпичи и сухие смеси
        </v-list-item>
      </router-link>
      <router-link
        to="/work"
      >
        <v-list-item class="menu__item">
          Доставка и оплата
        </v-list-item>
      </router-link>
      <router-link
        to="/contacts"
      >
        <v-list-item class="menu__item">
          Контакты
        </v-list-item>
      </router-link>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>
<style lang="scss" >
.menu{
  font-size: 16px;
  font-weight: 600;
  &__group{
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: $lg){
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    a{
      text-decoration: none;
      &.nuxt-link-exact-active{
        text-decoration: underline;
      }
    }
  }
  &__item{
    cursor: pointer;
    transition: .3s;
    width:auto;
    flex: 0 0 auto;
    min-height: 40px;
    &:hover{
      color: $secondary;
    }
    &.nuxt-link-exact-active{
      text-decoration: underline;
    }
    &:before, span{
      @media (min-width: $lg){
        display: none;
      }
    }
  }
}
</style>
