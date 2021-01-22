<template>
  <div class="wrap mb-auto mt-sm-auto">
    <div class="container">
      <div class="row align-items-center justify-content-center flex-column">
        <div class="login-form">
         <ValidationObserver ref="form" v-slot="{ valid }">
            <form class="form-signin" @submit.prevent="onSubmit">
              <h1 class="h3 mb-3">ЛИЧНЫЙ КАБИНЕТ</h1>
              <hr class="header-line"/>
              <label for="inputPhone">Мобильный телефон</label>
              <ValidationProvider rules="required|numeric|minPhone:10" v-slot="{ errors }">
                <input
                  id="inputPhone"
                  class="form-control"
                  :class="{'is-invalid': errors[0]}"
                  type="tel"
                  placeholder="+7-(999)-999-9999"
                  v-model="login.username"
                >
                <div v-if="errors[0]" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required|digits_between:8,25" v-slot="{ errors }">
                <label for="inputPassword">Ваш пароль</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="12345678"
                  :class="{'is-invalid': errors[0]}"
                  v-model="login.password"
                >
                <div v-if="errors[0]" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>

              <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="!valid">Войти</button>
              <nuxt-link class="rega mt-4 mb-2" to="/registration">Регистрация</nuxt-link>

            </form>
          </ValidationObserver>
          <div class="formFooter d-flex flex-column">
            <label class="text-normal mb-0" for="inputPassword">Забыли пароль от аккаунта?</label>
            <a href="#">Восстановите доступ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  export default {
    name: "login",
    layout: 'empty',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async onSubmit() {
        try {
          await this.$auth.loginWith('local', {data: this.login})
          this.$router.push('/cabinet')
        } catch (e) {
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped>

</style>
