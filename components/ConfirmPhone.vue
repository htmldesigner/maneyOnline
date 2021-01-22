<template>
  <!-- POPOUP MODAL
         ================================================== -->
  <div id="regaModal" class="rega-modal modal fade"
       data-backdrop="static"
       data-keyboard="false"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalCenterTitle"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-0">

        <form class="form-signin">

          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
          <h1 class="h3 mb-3 text-center pl-3 pr-3 pl-sm-0 pr-sm-0">На номер {{phone}} выслан SMS с кодом
            подтверждения.</h1>
          <hr class="header-line"/>
          <div class="modal-body text-center p-0">
            <div class="input-group mb-5 sms-number">
              <input class="active form-control" type="number" min="0" max="9" step="1" value="" placeholder="5"
                     tabindex="1">
              <input class="active form-control" type="number" min="0" max="9" step="1" value="" placeholder="5"
                     tabindex="2">
              <input class="active form-control" type="number" min="0" max="9" step="1" value="" placeholder="5"
                     tabindex="3">
              <input type="number" min="0" max="9" step="1" class="form-control" value="" placeholder="5"
                     tabindex="4">
              <input type="number" min="0" max="9" step="1" class="form-control" value="" placeholder="5"
                     tabindex="5">
              <input type="number" min="0" max="9" step="1" class="form-control" value="" placeholder="5"
                     tabindex="6">
            </div>
          </div>
          <div class="d-flex flex-column text-center">
            <button class="btn btn-lg btn-primary btn-block mb-3" @click.prevent="confirmSMS">Подтвердить</button>
            <a href="#" @click.prevent="resendCode">Выслать код повторно</a>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  export default {
    name: "ConfirmPhone",
    props: ['phone'],
    data() {
      return {
        smsCode: 65444,
      }
    },
    methods: {
      confirmSMS() {
        this.$emit('smsCode', this.smsCode)
      },
      resendCode(){
        this.$emit('resendCode')
      },
      modalInit() {
        $('#regaModal').modal('show');
      },
      modalHide() {
        $('#regaModal').modal('hide');
      }
    },
  }
</script>

<style scoped>

</style>
