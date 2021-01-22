<template>

  <div class="container w-1530">

    <div class="align-items-center justify-content-center flex-column">

      <div class="login-form">

        <form class="form-signin ofzaim-table">

          <button type="button" class="close d-none" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>

          <ul class="nav nav-tabs main-tabs float-left mb-4" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#cab-tab1" role="tab"
                 aria-controls="cab-tab1" aria-selected="true">Мои займы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#cab-tab2" role="tab"
                 aria-controls="cab-tab2" aria-selected="false">Карты и счета</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#cab-tab3" role="tab"
                 aria-controls="cab-tab3" aria-selected="false">Личные данные</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#cab-tab4" role="tab"
                 aria-controls="cab-tab4" aria-selected="false">Личные данные</a>
            </li>
          </ul>
          <ul class="nav nav-tabs ofzaim-btn" role="tablist">
            <li class="nav-item ml-0 ml-md-auto mt-3 mt-md-auto mb-3 mb-md-auto">
              <button class="btn btn-lg btn-primary btn-block" type="submit">Оформить займ</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="cab-tab1" role="tabpanel" aria-labelledby="home-tab">

              <div class="form-control d-flex flex-column align-items-center border-0 pt-5 pb-5 empty">
                <label class="">У вас нет активных займов</label>
                <img alt="" class="step-thumb" src="~/assets/image/empty.svg">
              </div>

            </div>
            <div class="tab-pane fade" id="cab-tab2" role="tabpanel" aria-labelledby="profile-tab">

              <div class="form-control d-flex flex-column align-items-center border-0 pt-5 pb-5 empty">
                <label class="">У вас нет активных займов</label>
                <img alt="" class="step-thumb" src="~/assets/image/empty.svg">
              </div>

            </div>
            <div class="tab-pane fade" id="cab-tab3" role="tabpanel" aria-labelledby="contact-tab">

              <div class="form-control d-flex flex-column align-items-center border-0 pt-5 pb-5 empty">
                <label class="">У вас нет активных займов</label>
                <img alt="" class="step-thumb" src="~/assets/image/empty.svg">
              </div>

            </div>
            <div class="tab-pane fade" id="cab-tab4" role="tabpanel" aria-labelledby="contact-tab">

              <div class="form-control d-flex flex-column align-items-center border-0 pt-5 pb-5 empty">
                <label class="">У вас нет активных займов</label>
                <img alt="" class="step-thumb" src="~/assets/image/empty.svg">
              </div>

            </div>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "Cabinet"
  }
</script>

<style scoped>

</style>
