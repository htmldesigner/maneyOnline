<template>
    <div class="cabinet-layout">
      <NavBar/>
      <main>
        <div class="container w-1530">
          <Nuxt/>
        </div>
      </main>
      <Footer/>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import Footer from "../components/Footer";

  export default {
    name: "empty",
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style scoped>

</style>
