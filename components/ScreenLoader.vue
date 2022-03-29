<template>
  <div class="screen-loader">
    <div class="screen-loader__container">
      <div
        v-for="item in 9"
        :key="item"
        class="screen-loader__brick"
      />
    </div>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>

.screen-loader{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 1000;
  &__container{
    position: absolute;
    width:111px;
    height: 66px;
    left: 50%;
    top:50%;
    margin: -33px 0 0 -55px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  &__brick{
    width:35px;
    height: 20px;
    background: #DD2C00;
    animation: screen-loader 1.2s infinite;
    transform: scale(0.0);
    &:nth-of-type(1){
      animation-delay: 0.1s;
    }
    &:nth-of-type(2),
    &:nth-of-type(4){
      animation-delay: 0.2s;
    }
    &:nth-of-type(3),
    &:nth-of-type(5),
    &:nth-of-type(7){
      animation-delay: 0.3s;
    }
    &:nth-of-type(6),
    &:nth-of-type(8){
      animation-delay: 0.4s;
    }
    &:nth-of-type(9){
      animation-delay: 0.5s;
    }
  }
}

@keyframes screen-loader {
  0%{
    transform: scale(0.0);
  }
  40%{
    transform: scale(1.0);
  }
  80%{
    transform: scale(1.0);
  }
  100%{
    transform: scale(0.0);
  }
}
@keyframes bottom-layer {
  0%{
    filter: opacity(100%);
  }
  90%{
    filter: opacity(100%);
  }
  100%{
    filter: opacity(0%);
  }
}
</style>
