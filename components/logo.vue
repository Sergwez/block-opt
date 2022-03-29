<template>
  <router-link
    to="/"
    class="logo"
  >
    <div class="logo__link pointer">
      <img
        class="logo__img"
        src="~/assets/img/logo.png"
      >
      {{ $info.site }}
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'Logo',
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
  .logo{
    text-decoration: none;
    &__link{
      font-family: 'Oswald', sans-serif;
      color: #000014;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 24px;
      @media (min-width:$md){
        font-size: 32px;
      }
    }
    &__img{
      width:35px;
      height: 27px;
      margin-right: 8px;
      @media (min-width:$md){
        width:50px;
        height: 38px;
        margin-right: 15px;
      }
    }
  }

</style>
