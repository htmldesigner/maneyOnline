<template>
    <div>
      <Cabinet/>
    </div>
</template>

<script>
  import Cabinet from "../../components/Cabinet/Cabinet";

  export default {
    components: {
      Cabinet
    },
    layout: 'cabinet',
    middleware: ['auth'],
  }
</script>

<style scoped>

</style>
