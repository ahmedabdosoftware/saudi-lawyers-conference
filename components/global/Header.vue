<template>
  <v-app-bar style="margin-top: 35px;" color="transparent" flat app :style="headerStyle">
    <v-container>
      <v-row align="center" justify="space-between" :class="{ 'reverse-layout': drawer }">
        
        <!-- Desktop Links -->
        <v-col cols="auto" class="d-none d-md-flex links-col">
          <v-btn v-for="(item, i) in links" :key="i" text class="nav-link">
            {{ item }}
          </v-btn>
        </v-col>
        
        <!-- Logo -->
        <v-col cols="auto" class="logo-col">
          <v-img src="/assets/logo.png" width="120" alt="Logo" />
        </v-col>

        <!-- Mobile Menu Button -->
        <v-col cols="auto" class="d-flex d-md-none">
          <v-btn icon @click="drawer = !drawer" class="menu-btn">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer 
    v-model="drawer" 
    temporary 
    right
    class="mobile-drawer"
    style="position: fixed; height: 100vh; z-index: 3000; top: 0"
    disable-resize-watcher
    disable-route-watcher
  >
    <!-- Close Button -->
    <div class="close-btn-container">
      <v-btn icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list dense>
      <v-list-item 
        v-for="(item, i) in links" 
        :key="i" 
        @click="drawer = false"
        class="list-item"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const links = [
  'عن الحدث',
  'الجدول الزمني',
  'المتحدثين الرئيسيين',
  'المتحدثين المكررين',
  'السباقة المبكرة',
  'تواصل معنا',
];
const headerStyle = ref({});

const handleScroll = () => {
  if (window.scrollY > 100) {
    headerStyle.value = {
      marginTop: "0px",
      width: '100%',
      backgroundImage: 'url(/assets/bgEvent.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background 0.3s ease-in-out',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
      transition: 'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      zIndex: '9999',
    };
  } else {
    headerStyle.value = {};
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Navigation link styles */
.nav-link {
  color: white !important;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #2196f3 !important;
  transform: translateY(-2px);
}

/* Adjust flex direction based on drawer state */
.reverse-layout {
  flex-direction: row;
}

/* Link spacing */
.links-col {
  display: flex;
  gap: 20px;
}

/* Mobile menu button color */
.menu-btn {
  color: white !important;
}

/* Mobile drawer style */
.mobile-drawer {
  background-image: url('/assets/bgEvent.png');
    background-size: cover;
    background-position: center;
    color: white;
    position: fixed;
    left: 0px;
}

/* Drawer close button container */
.close-btn-container {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

/* Close button style */
.close-btn {
  background-color: #020228;
  color: white;
}

/* List item text start from left (for Arabic) */
.list-item {
  justify-content: flex-start;
  text-align: right;
  padding-right: 16px;
}

/* Ensure drawer appears over everything */
.v-navigation-drawer {
  z-index: 3000 !important;
}

@media (max-width: 768px) {
  
.logo-col{
  order: 2;
}
}
</style>
