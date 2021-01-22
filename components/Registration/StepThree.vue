<template>
  <div class="login-form w-879">
    <form class="form-signin">
      <button type="button" class="close d-none" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true"></span>
      </button>

      <h1 class="h3 mb-3">ВЫБЕРИТЕ СПОСОБ ПОЛУЧЕНИЯ СРЕДСТВ</h1>

      <hr class="header-line" />


      <div class="input-group mb-4 d-flex align-items-center justify-content-between sposob">

        <div class="col input-group-text active form-control d-flex flex-col align-items-center mr-md-4">
          <img alt="" class="step-thumb" src="image/step3-img1.svg">
          <label class="w-30 mb-0 ml-2">На банковскую карту</label>
        </div>
        <div class="col input-group-text form-control d-flex flex-col align-items-center mr-md-1 ml-md-1">
          <img alt="" class="step-thumb" src="image/step3-img2.svg">
          <label class="w-30 mb-0 ml-2">На банковский счет</label>
        </div>
        <div class="col input-group-text form-control d-flex flex-col align-items-center ml-md-4">
          <img alt="" class="step-thumb" src="image/step3-img3.svg">
          <label class="w-30 mb-0 ml-2">Наличными в отделении</label>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
 export default {
  name: "StepThree"
 }
</script>

<style scoped>

</style>
