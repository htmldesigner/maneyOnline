<template>
  <!-- SUCCESS MODAL
          ================================================== -->
  <div id="successModal" class="rega-modal modal fade"
       data-backdrop="static"
       data-keyboard="false"
       tabindex="-1"
       role="dialog"
       aria-hidden="true"
       aria-labelledby="exampleModalCenterTitle"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
        <div><span class="glyphicon glyphicon-ok"></span></div>
        <div class="modal-body text-center">
          <p>{{success}}</p>
        </div>
        <div class="modal-footer d-none">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  export default {
    name: "SuccessPopup",
    props: ['message'],
    computed: {
      success() {
        return this.$store.getters['common/success']
      }
    },
    watch: {
      success: {
        handler(value) {
          if (value) {
            this.modalInit()
          } else {
            this.modalHide()
          }
        }
      }
    },
    methods: {
      modalInit() {
        $('#successModal').modal('show');
      },
      modalHide() {
        setTimeout(() => {
          $('#successModal').modal('hide');
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
