<template>
  <div class="about container">
    <h2 class="about__title">
      Контакты
    </h2>
    <v-simple-table>
      <tbody>
        <tr>
          <td>Полное наименование предприятия</td>
          <td>Общество с ограниченной ответственностью «Строй Атлант»</td>
        </tr>
        <tr>
          <td>Краткое наименование предприятия</td>
          <td>ООО «Строй Атлант»</td>
        </tr>
        <tr>
          <td>Юридический адрес</td>
          <td>
            12500гг. Москва,  пер., Большой Гнездниковский
            д.3, этаж 1, пом. 4, ком. 7, офис 7Б
          </td>
        </tr>
        <tr>
          <td>ИНН</td>
          <td>9703071080</td>
        </tr>
        <tr>
          <td>КПП</td>
          <td>770301001</td>
        </tr>
        <tr>
          <td>ОГРН</td>
          <td>1227700054746</td>
        </tr>
        <tr>
          <td>Банковские реквизиты</td>
          <td>
            р/с 40702810202370009796, АО«АЛЬФА-БАНК »,
            к/с 30101810200000000593, в ГУ БАНКА РОССИИ ПО ЦФО. БИК 044525593.
          </td>
        </tr>
        <tr>
          <td>Электронная почта </td>
          <td>Statlant22@gmail.com</td>
        </tr>
        <tr>
          <td>Телефоны</td>
          <td>8 (926)-085-00-07</td>
        </tr>
        <tr>
          <td>Директор</td>
          <td>Бондаренко Денис Викторович</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
<style lang="scss" scoped>
.about{
  &__title{
    font-family: Oswald, sans-serif;
    font-size: 36px;
    line-height: 1;
    margin: 40px 0 20px 0;
    text-align: center;
    @media (min-width: $lg){
      font-size: 56px;
      margin: 40px 0 40px 0;
    }
  }
  tr{
    &:nth-of-type(2n){
      background: #f3f3f3;
    }
    td{
      padding: 4px !important;
      @media (min-width: $lg){
        padding: 0 12px !important;
        width: 50%;
      }
    }
  }
}
</style>
