<template>
  <header class="shadow-sm bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-white bg-white">
        <nuxt-link tag="a" class="navbar-brand mr-4" to="/">
          <img src="~/assets/image/brand.svg" class="navbar-brand-img d-none d-sm-block" alt="Alt">
          <img src="~/assets/image/brand-m.svg" class="navbar-brand-img d-block d-sm-none" alt="Alt">
        </nuxt-link>
        <div class="dropdown lang">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            ru
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">en</button>
          </div>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <div class="navbar-toggler-icon">
            <div class="btn_row"></div>
            <div class="btn_row"></div>
            <div class="btn_row"></div>
          </div>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto ml-0 ml-sm-3">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/get_credit">Как получить кредит</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/pay_credit">Как оплатить кредит</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#">Наши отделения</a>
            </li>
          </ul>
          <div class="block-phone text-right">
            <div class="phone-number text-right"><a href="tel:87711099990">87711099990</a></div>
            <div class="phone-text">9:00 до 19:00 без выходных</div>
          </div>

          <ul v-if="this.$auth.loggedIn" class="nav navbar-nav navbar-right login-user">
            <li class="dropdown open">
              <a href="#" class="dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
                <span class="glyphicon glyphicon-user"></span>&nbsp;
                <span class="login-name">Аккаунт</span>
                <span class="glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul class="dropdown-menu p-3">
                <li>
                  <div class="navbar-login navbar-login-session">
                    <div class="row">
                      <div class="col-lg-12">
                        <p class="mb-0">
                          <nuxt-link to="/cabinet" class="btn btn-danger btn-block">Профиль</nuxt-link>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="navbar-login navbar-login-session">
                    <div class="row">
                      <div class="col-lg-12">
                        <p class="mb-0">
                          <a class="btn btn-danger btn-block" @click="logout">Выйти</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <nuxt-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">Войти</nuxt-link>

        </div>
      </nav>
    </div>
  </header>


</template>

<script>
  export default {
    name: "NavBar",
    methods: {
      logout() {
        this.$auth.logout()
        localStorage.removeItem('stepStatus')
        this.$router.push('/')
      },
    }
  }
</script>

<style scoped>

</style>
