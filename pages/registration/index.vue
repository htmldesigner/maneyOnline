<template>

  <div class="wrap mb-auto mt-sm-auto">
    <div class="container">

      <div class="row align-items-center justify-content-center flex-column">

        <div class="steps d-flex align-items-center justify-content-center w-879">

          <div class="step d-flex align-items-baseline justify-content-left">
            <div class="mr-2 mb-1 w-100">
              <img v-if="!this.$auth.loggedIn" alt="Alt" class="step-thumb" src="~/assets/image/step1.svg">
              <img v-else alt="Alt" class="step-thumb" src="~/assets/image/step-success.svg">
            </div>
            <div class="step-content">
              <h4 class="step-title mb-0 active">Регистрация</h4>
              <p v-if="!this.$auth.loggedIn" class="step-desc mb-0">В ожидании</p>
              <p v-else class="step-desc mb-0">Успешно</p>
            </div>
          </div>

          <div class="step align-items-baseline justify-content-left bordered w-100 d-none d-md-flex">

          </div>

          <div class="step d-flex align-items-baseline justify-content-left text-center text-md-left">
            <div class="mr-2 mb-1 w-100">
              <img v-if="!this.$auth.loggedIn" alt="Alt" class="step-thumb"
                   src="~/assets/image/step2-def.svg">
              <img v-else-if="this.$auth.loggedIn" alt="Alt" class="step-thumb"
                   src="~/assets/image/step2-act.svg">
              <img v-else-if="stepOneSuccess && stepTwoSuccess" alt="Alt" class="step-thumb"
                   src="~/assets/image/step-success.svg">
            </div>
            <div class="step-content">
              <h4 class="step-title mb-0">Личные данные</h4>
              <p v-if="stepOneSuccess && stepTwoSuccess" class="step-desc mb-0">Успешно</p>
              <p v-else class="step-desc mb-0">В ожидании</p>
            </div>
          </div>

          <div class="step align-items-baseline justify-content-left bordered w-100 d-none d-md-flex">

          </div>

          <div class="step d-flex align-items-baseline justify-content-left text-right text-md-left">
            <div class="mr-2 mb-1 w-100">
              <img alt="" class="step-thumb" src="~/assets/image/step3-def.svg">
            </div>
            <div class="step-content">
              <h4 class="step-title mb-0">Получение</h4>
              <p class="step-desc mb-0">В ожидании</p>
            </div>
          </div>

        </div>

        <StepOne v-if="!this.$auth.loggedIn"/>
        <StepTwo v-if="this.$auth.loggedIn"/>
        <StepThree v-if="stepOneSuccess && stepTwoSuccess"/>
        
        <!--          <StepOne v-if="!stepTwoSuccess && !stepThreeSuccess && !stepOneSuccess"/>-->
        <!--          <StepTwo v-if="stepOneSuccess && !stepTwoSuccess && !stepThreeSuccess"/>-->
        <!--          <StepThree v-if="stepOneSuccess && stepTwoSuccess"/>-->

      </div>
    </div>
    <SuccessPopup />
  </div>
</template>

<script>
  import StepOne from "../../components/Registration/StepOne";
  import StepTwo from "../../components/Registration/StepTwo";
  import StepThree from "../../components/Registration/StepThree";
  import SuccessPopup from "../../components/SuccessPopup";

  export default {
    components: {
      StepOne, StepTwo, StepThree, SuccessPopup
    },
    // computed: {
    //   stepStatus() {
    //     const status = this.$store.getters['users/getStepStatus']
    //     if (parseInt(status) === 1) {
    //      this.stepOneSuccess = 1
    //     } else if (parseInt(status) === 2) {
    //       this.stepOneSuccess = 2
    //       this.stepTwoSuccess = 2
    //     } else {
    //       this.stepOneSuccess = null
    //       this.stepTwoSuccess = null
    //       this.stepThreeSuccess = null
    //     }
    //   }
    // },
    data() {
      return {
        stepOneSuccess: null,
        stepTwoSuccess: null,
        stepThreeSuccess: null,
      }
    }
  }
</script>

<style scoped>

</style>
