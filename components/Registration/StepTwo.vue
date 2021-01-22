<template>
  <div class="login-form w-879">

    <form class="form-signin">

      <h1 class="h3 mb-3">ЛИЧНЫЕ ДАННЫЕ</h1>

      <hr class="header-line" />

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Полное имя</label>
        <input class="form-control" type="text" placeholder="Введите имя" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Фамилия</label>
        <input class="form-control" type="text" placeholder="Введите фамилию" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Отчество</label>
        <input class="form-control" type="text" placeholder="Введите отчество" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Дата рождения</label>
        <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" data-date-format="ММ/ДД/ГГГГ">
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Семейная жизнь</label>
        <div class="input-group-text active form-control d-flex flex-row align-items-center mr-0 mr-md-2">
          <input type="radio" name="Radios" id="Radios1" checked>
          <label class="w-30 mb-0 ml-2">Не женат / Не замужем</label>
        </div>
        <div class="form-check input-group-text form-control d-flex flex-row align-items-center ml-0 ml-md-2">
          <input type="radio" name="Radios" id="Radios2">
          <label class="w-30 mb-0 ml-2">Женат / Замужем</label>
        </div>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Пол</label>
        <div class="input-group-text active form-control d-flex flex-row align-items-center mr-0 mr-md-2">
          <input type="radio" name="Radios2" id="Radios21" checked>
          <label class="w-30 mb-0 ml-2">Мужской</label>
        </div>
        <div class="input-group-text form-control d-flex flex-row align-items-center ml-0 ml-md-2">
          <input type="radio" name="Radios2" id="Radios22">
          <label class="w-30 mb-0 ml-2">Женский</label>
        </div>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">ИИН</label>
        <input class="form-control" type="text" placeholder="Введите ИИН" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">№ Удостоверения личности</label>
        <input class="form-control" type="text" placeholder="Введите номер" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label for="inputGroupSelect01" class="w-30">Место выдачи</label>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Выберите из списка</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Дата выдачи</label>
        <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control">
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Срок действия</label>
        <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control">
      </div>

      <h1 class="h3 mb-3 mt-5">АДРЕС РЕГИСТРАЦИИ</h1>

      <hr class="header-line" />

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Населенный пункт</label>
        <input class="form-control" type="text" placeholder="Введите место проживания" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Улица</label>
        <input class="form-control" type="text" placeholder="Введите улицу" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">№ Дома</label>
        <input class="form-control w-50" type="text" placeholder="Введите номер дома" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">№ Квартиры</label>
        <input class="form-control w-50" type="text" placeholder="Введите номер квартиры" required>
      </div>

      <h1 class="h3 mb-3 mt-5">МЕСТО РАБОТЫ</h1>

      <hr class="header-line" />

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label for="inputGroupSelect02" class="w-30">Тип занятости</label>
        <select class="custom-select" id="inputGroupSelect02">
          <option selected>Выберите из списка</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Должность</label>
        <input class="form-control" type="text" placeholder="Введите должность" required>
      </div>

      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Ежемесячный доход</label>
        <input class="form-control" type="text" placeholder="0" required>
      </div>
      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Ежемесячные расходы по кредиту</label>
        <input class="form-control" type="text" placeholder="0" required>
      </div>
      <div class="input-group mb-4 d-flex flex-row align-items-center justify-content-between">
        <label class="w-30">Дополнительный доход</label>
        <input class="form-control" type="text" placeholder="0" required>
      </div>

      <button class="btn btn-lg btn-primary btn-block mt-5 w-50" type="submit">Далее</button>

    </form>

{{userForm}}
  </div>

</template>

<script>
  export default {
    name: "StepTwo",
    computed: {
      userForm(){
        return this.$store.getters['users/getUser']
      }
    },
    async fetch() {
      if (this.$auth.loggedIn) {
        await this.$store.dispatch('users/getUserForm')
      }
    }
  }
</script>

<style scoped>

</style>
