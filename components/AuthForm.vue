<template>
  <div>
    <ScreenLoader v-show="$store.getters['auth/hideLoader'] != true" />
    <v-card
      v-show="$store.getters['auth/hideLoader'] === true"
      class="mx-auto my-8"
      max-width="400"
      :loading="loading"
    >
      <template #progress>
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        />
      </template>

      <v-form
        ref="form"
        v-model="valid"
        class="auth-form"
      >
        <v-card-title>Вход в админпанель</v-card-title>
        <v-text-field
          v-model="formData.email"
          autofocus
          :rules="emailRules"
          label="Введите e-mail"
          required
          @input="formError = false"
        />

        <v-text-field
          v-model="formData.password"
          type="password"
          :rules="passwordRules"
          label="Введите пароль"
          required
          @input="formError = false"
        />

        <p
          v-show="formError"
          class="error--text text-caption"
        >
          Неверный e-mail или пароль
        </p>

        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="primary"
            class=""
            @click="signInUser"
          >
            Войти
          </v-btn>

          <v-btn
            text
            class="ml-auto"
            color="accent-4"
            @click="resetForm()"
          >
            Восстановить пароль
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-title>Восстановление пароля</v-card-title>
          <v-form
            ref="form"
            v-model="validRes"
            class="auth-form"
          >
            <v-text-field
              v-if="!emailSent"
              v-model="formData.email"
              autofocus
              :rules="emailRules"
              label="Введите e-mail"
              required
              @input="inputEmailReset()"
            />
            <p
              v-else
              class="error--text font-weight-normal py-3"
            >
              Письмо с инструкцией по восстановлению пароля отправлено на {{ formData.email }}
            </p>
            <p
              v-if="emailError"
              class="error--text font-weight-normal"
            >
              E-mail {{ formData.email }} не найден!
            </p>

            <v-card-actions>
              <v-btn
                text
                color="accent-4"
                @click="backToLogin()"
              >
                <v-icon>{{ mdiChevronLeft }}</v-icon>
                Назад
              </v-btn>
              <v-btn
                v-show="showResetBtn"
                class="ml-auto"
                :disabled="!validRes"
                color="primary"
                @click="resetPassword"
              >
                Отправить письмо
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { mdiChevronLeft } from '@mdi/js';
import ScreenLoader from '~/components/ScreenLoader.vue';
import { mapActions } from 'vuex';

export default {
  components: { ScreenLoader },

  data() {
    return {
      mdiChevronLeft,
      reveal: false,
      valid: true,
      validRes: true,
      emailSent: false,
      formError: false,
      showResetBtn: true,
      emailError: false,
      passwordRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
      ],
      emailRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => /.+@.+\..+/.test(v) || 'Введите корректный e-mail',
      ],
      loading: false,
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    authUser() {
      return this.$store.state['auth/authUser'];
    },
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
  },
  watch: {
    isLoggedIn() {
      this.redirectToAdmin();
    },
  },
  mounted() {
    this.redirectToAdmin();
    this.authReady();
  },

  methods: {
    ...mapActions({ onAuthStateChangedAction: 'auth/onAuthStateChangedAction' }),
    async authReady() {
      await this.$fire.authReady();
      this.$fire.auth.onAuthStateChanged((user) => {
        this.onAuthStateChangedAction(user);
      });
    },
    async resetPassword() {
      try {
        await this.$fire.auth.sendPasswordResetEmail(this.formData.email);
        this.emailSent = true;
        this.showResetBtn = false;
      } catch (e) {
        this.emailError = true;
      }
    },
    async signInUser() {
      try {
        this.loading = true;
        await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        );
      } catch (e) {
        this.formError = true;
        this.loading = false;
      }
    },
    backToLogin() {
      this.reveal = false;
      this.emailSent = false;
      this.showResetBtn = true;
      this.emailError = false;
    },
    resetForm() {
      this.reveal = true;
      this.formError = false;
    },
    inputEmailReset() {
      this.formError = false;
      this.emailError = false;
    },
    redirectToAdmin() {
      if (this.$store.getters['auth/isLoggedIn']) {
        this.$router.push('/admin');
      }
    },
  },
};
</script>
<style>
.auth-form{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  height: 100%;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
