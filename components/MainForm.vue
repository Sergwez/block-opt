<template>
  <v-form
    ref="form"
    v-model="validRes"
    class="main-form"
    lazy-validation
  >
    <v-text-field
      v-model="formData.name"
      :rules="nameRules"
      label="Ваше имя"
      outlined
      :prepend-inner-icon="mdiAccountOutline"
      color="secondary"
    />
    <v-text-field
      v-model="formData.phone"
      :rules="phoneRules"
      label="Ваш телефон"
      :prepend-inner-icon="mdiPhoneOutline"
      outlined
      prefix=""
      color="secondary"
    />
    <v-btn
      class="secondary w-100"
      :disabled="!validRes"
      :loading="sending"
      depressed
      x-large
      @click="sendLead()"
    >
      <v-icon v-show="sent">
        {{ mdiCheck }}
      </v-icon>
      {{ btnText }}
    </v-btn>
    <div class="text-body-2 mt-3">
      Нажимая кнопку отправить, вы автоматически соглашаетесь с правилами
      <Policy>публичной оферты</Policy>
    </div>
  </v-form>
</template>

<script>
import { mdiCheck, mdiPhoneOutline, mdiAccountOutline } from '@mdi/js';
import axios from 'axios';
import Policy from './popups/Policy.vue';

export default {
  name: 'MainForm',
  components: { Policy },
  props: {
    btntext: {
      type: String,
      default: '',
    },
    sendfrom: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      mdiCheck,
      mdiPhoneOutline,
      mdiAccountOutline,
      btnText: this.btntext ? this.btntext : 'Обратный звонок',
      formData: {},
      sent: false,
      sending: false,
      validRes: true,
      nameRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => /^[a-z, а-яё, A-Z, А-ЯЁ]+$/.test(v) || 'Поле может содержать только буквы',
      ],
      phoneRules: [
        (v) => !!v || 'Поле "Телефон" не должно быть пустым',
        (v) => /^(\+7|8)/.test(v) || 'Поле должно начинаться с "+7" или "8"',
        (v) => /^(\+7|8)([\D]*[0-9]{1}[\D]*){10}$/.test(v) || 'Поле должно содержать 11 цифр',
        (v) => /^(\+7|8)([^A-Fa-f]*[0-9]{1}[^A-Fa-f]*)$/.test(v) || 'Поле не должно содержать буквы',
      ],
    };
  },
  methods: {
    sendLead() {
      const context = this;
      if (this.formData.name && this.formData.phone) {
        this.formData.sendFrom = this.sendfrom;
        this.sending = true;
        axios({
          method: 'post',
          url: '/api/send-lead',
          data: {
            msg: context.formData,
          },
          headers: { 'Content-Type': 'application/json' },
        })
          .then(() => {
            context.sent = true;
            context.sending = false;
            context.btnText = 'Отправлено';
            context.$refs.form.reset();
            context.$yandexMetrika.reachGoal('my-goal');
            setTimeout(() => {
              context.sent = false;
              context.btnText = context.btntext || 'Обратный звонок';
              context.$emit('show-form', false);
            }, 3000);
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        context.$refs.form.validate();
      }
    },
  },
};
</script>
<style lang="scss" >
.main-form{
  max-width:400px;
  display: flex;
  flex-direction: column;
}
</style>
