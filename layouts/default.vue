<template>
  <div>
      <NavBar/>
    <main>
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>
<script>
  import NavBar from "../components/NavBar";
  import Footer from "../components/Footer";

  export default {
    name: "default",
    components: {
      Footer,
      NavBar
    },
    mounted() {
    }
  }
</script>
<style>

</style>
