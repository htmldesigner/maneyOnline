<template>
  <div class="login-form">
    <ValidationObserver ref="form" v-slot="{ valid }">
      <form class="form-signin">

        <h1 class="h3 mb-3">РЕГИСТРАЦИЯ</h1>
        <hr class="header-line"/>

        <label for="inputPhone">Мобильный телефон</label>
        <ValidationProvider rules="required|numeric|minPhone:10" v-slot="{ errors }">
          <input
            id="inputPhone"
            class="form-control"
            :class="{'is-invalid': errors[0]}"
            type="tel"
            placeholder="+7-(999)-999-9999"
            required
            v-model.trim.number="user.phone"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <label for="inputIIN">ИИН</label>
        <ValidationProvider rules="required|numeric|validateIIN:12" v-slot="{ errors }">
          <input
            type="text"
            id="inputIIN"
            :class="{'is-invalid': errors[0]}"
            class="form-control"
            placeholder="ИИН"
            required
            v-model.trim.number="user.iin"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <label for="inputEmail">Электронная почта</label>
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <input
            id="inputEmail"
            class="form-control"
            :class="{'is-invalid': errors[0]}"
            placeholder="E-mail.. typing"
            v-model.trim="user.email"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <label for="inputPassword">Пароль</label>
        <ValidationProvider name="confirm" rules="required|digits_between:8,25" v-slot="{ errors }">
          <input
            type="password"
            id="inputPassword"
            v-model.trim="user.password"
            :class="{'is-invalid': errors[0]}"
            class="form-control"
            placeholder="Ваш пароль"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <label for="confirmPassword">Подтвердить пароль</label>
        <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
          <input
            type="password"
            id="confirmPassword"
            v-model.trim="user.confirmPassword"
            :class="{'is-invalid': errors[0]}"
            class="form-control"
            placeholder="Подтвердить пароль"
          >
          <div v-if="errors[0]" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <div class="checkbox mb-4">
          <ValidationProvider :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
            <label class="text-normal d-flex align-items-center pb-2">
              <input
                class="mr-2"
                type="checkbox"
                v-model="user.agree"
              >
              Я соглашаюсь с условиями
            </label>
          </ValidationProvider>
        </div>

        <button class="btn btn-lg btn-primary btn-block" @click.prevent="prepareUserData" :disabled="!valid">Далее
        </button>

      </form>
    </ValidationObserver>

    <div class="formFooter d-flex flex-column">
      <label class="text-normal mb-0">Уже проходили регистрацию на сайте?</label>
      <nuxt-link to="/cabinet">Зайдите в личный кабинет</nuxt-link>
    </div>

    <ConfirmPhone
      @smsCode="sendUser"
      @resendCode="resendCode"
      :phone="user.phone"
      ref="phoneModal"
    />

  </div>


</template>

<script>
  import ConfirmPhone from "../ConfirmPhone";
  import {ValidationProvider, ValidationObserver} from "vee-validate";

  export default {
    name: "StepOne",
    components: {
      ConfirmPhone,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        user: {
          phone: null,
          email: null,
          iin: null,
          password: null,
          confirmPassword: null,
          agree: null
        }
      }
    },
    methods: {
      async prepareUserData() {
        try {
          if (this.user.agree) await this.$store.dispatch('users/sendUserData', this.user)
          this.$refs.phoneModal.modalInit()
        } catch (e) {
          console.log(e)
        }
      },
      async sendUser(smsCode) {
        try {
          if (smsCode) {
            this.user['code'] = smsCode
            await this.$store.dispatch('users/confirmUserDate', this.user)
            await this.$refs.phoneModal.modalHide()
            this.$store.dispatch('common/setSuccess', 'Телефон подтвержден')
            await this.$auth.loginWith('local', {data: {username: this.user.phone, password: this.user.password}})
            this.$store.dispatch('common/clearSuccess')
          }
        } catch (e) {
          console.log(e)
        }
      },
      async resendCode() {
        try {
          if (this.user.agree) await this.$store.dispatch('users/sendUserData', this.user)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>

</style>
