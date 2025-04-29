<template>
  <v-app>
    <div class="hero-wrapper">
      <div class="overlay"></div>
      <Header />
      <Hero/>
    </div>
    <v-main class="pa-0">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>

.hero-wrapper {
  position: relative;
  background: url('/assets/hero.png') center center/cover no-repeat;
  min-height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0; 
  background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2));
  /* background: rgb(49, 49, 49);  */
  z-index: 1; 
  margin:0px !important;
}


</style>