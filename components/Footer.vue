<template>
  <v-footer
    class="footer"
    dark
  >
    <span>
      {{ $info.companyName }}
      ОГРН: {{ $info.ogrn }}
    </span>
    <span>
      {{ $info.site }} &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px 0;
}
</style>
