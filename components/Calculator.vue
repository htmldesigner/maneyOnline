<template>
  <section class="top-calc">
    <div class="form-calc">

      <div class="block-zaima">
        <div class="block-zaima-title">Сумма займа:</div>
        <div class="custom-range">
          <div class="range mr-2">
            <input type="range" min="15000" max="300000" step="500" v-model="loan" class="form-range"
                   id="customRange1"/>
          </div>
          <label class="form-label" for="customRange1">{{loan | numberFilter}} тг</label>
        </div>
      </div>

      <div class="block-zaima">
        <div class="block-zaima-title">Срок займа:</div>
        <div class="custom-range">
          <div class="range mr-2">
            <input type="range" min="10" max="30" step="1" v-model="day" class="form-range" id="customRange2"/>
          </div>
          <label class="form-label" for="customRange2">{{day}} дней</label>
        </div>
      </div>

      <div class="block-zaima-clearer"></div>

      <div class="bottom-block">

        <div class="block-zaima">
          <div class="block-zaima-title-date">Дата возврата займа:</div>
          <label class="form-label">{{returnDay}}</label>
        </div>

        <div class="block-zaima">
          <div class="block-zaima-title-date">Сумма к возврату:</div>
          <label class="form-label">{{returnMoney | numberFilter}} тг</label>
        </div>

        <div class="block-zaima ml-auto">
          <nuxt-link v-if="this.$auth.loggedIn" to="/cabinet" tag="button" class="btn btn-secondary">Получить деньги</nuxt-link>
          <nuxt-link v-else to="/login" tag="button" class="btn btn-secondary">Получить деньги</nuxt-link>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "Calculator",
    computed: {
      returnDay() {
        let date = moment().add(this.day, 'days')
        return date.format('DD.MM.YYYY')
      },
      returnMoney() {
        let percentage = parseInt(this.loan) * 1 / 100
        return (percentage * parseInt(this.day)) + parseInt(this.loan)
      }
    },
    data: () => ({
      loan: 150000,
      day: 20,
    }),
    filters: {
      numberFilter: function (value) {
        return new Intl.NumberFormat('ru-RU').format(parseInt(value))
      }
    }
  }
</script>

<style scoped>

</style>
