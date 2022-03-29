<template>
  <div class="teaser container">
    <div class="menu__item">
      Главная
    </div>
    <div class="menu__item">
      Газосиликатные блоки
    </div>
    <div class="menu__item">
      Кирпичи
    </div>
    <div class="menu__item">
      Доставка и оплата
    </div>
    <div class="menu__item">
      О компании
    </div>
    <div class="menu__item">
      Контакты
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teaser',
};
</script>
<style lang="scss" >
.menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

  &__item{
    cursor: pointer;
    transition: .3s;
    &:hover{
      // text-decoration: underline;
      color: $secondary;
    }
  }
}
</style>
