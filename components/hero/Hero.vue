<template>
    <section class="hero-section">
      <v-container class="text-center text-content">

        <!-- Hero text -->
        <transition name="fade-slide-down">
          <h1>انضم إلى نخبة المحامين في السعودية - مؤتمر 2024 يبدأ الآن!</h1>
        </transition>
  
        <transition name="fade-slide-up" appear>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...</p>
        </transition>
      </v-container>

     <!-- about event and arrow -->
      <div class="event-section">
        <transition name="fade-slide-up" appear>
          <p class="event-text" @click="scrollToEvent">عن الحدث</p>
        </transition>
  
        <v-btn color="primary" class="mt-2 bounce" icon @click="scrollToEvent">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
  
      <!-- Social Icons -->
      <div class="social-icons social-icons-coulmn"  style=" display: flex; flex-direction: column ; position: absolute; bottom: 0px; left: 20px; gap: 15px; z-index: 2;" >
        <transition-group name="fade" tag="div" style=" display: flex !important; flex-direction: column !important;position: absolute;bottom: 20px;left: 20px; gap: 15px; z-index: 2;" >
          <v-btn  class="btn-icons-hero" icon key="facebook">
            <v-icon class="social-icon">mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="btn-icons-hero" icon key="linkedin">
            <v-icon class="social-icon">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn  class="btn-icons-hero" icon key="instagram">
            <v-icon class="social-icon">mdi-instagram</v-icon>
          </v-btn>
          <v-btn  class="btn-icons-hero" icon key="twitter">
            <v-icon class="social-icon">mdi-twitter</v-icon>
          </v-btn>
        </transition-group>
      </div>

      <!-- Social Icons -->
      <div class="social-icons social-icons-rows"  style=" display: flex ; flex-direction: row !important ; position: absolute; bottom: 0px; left: 20px; gap: 15px; z-index: 2;" >
        <transition-group name="fade" tag="div" style=" display: flex ; flex-direction: row !important;position: absolute;bottom: 20px;left: 20px; gap: 15px; z-index: 2;" >
          <v-btn  class="btn-icons-hero" icon key="facebook">
            <v-icon class="social-icon">mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="btn-icons-hero" icon key="linkedin">
            <v-icon class="social-icon">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn  class="btn-icons-hero" icon key="instagram">
            <v-icon class="social-icon">mdi-instagram</v-icon>
          </v-btn>
          <v-btn  class="btn-icons-hero" icon key="twitter">
            <v-icon class="social-icon">mdi-twitter</v-icon>
          </v-btn>
        </transition-group>
      </div>
    </section>
  </template>
  
  <script setup>
  const scrollToEvent = () => {
    const eventSection = document.getElementById('event-section');
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  
  <style scoped>
    .hero-section {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        position: relative;
        z-index: 10;
        padding-top: 80px;
    }
    
    .text-content {
    z-index: 2;
    position: relative;
    margin-top: 100px; 
    }

    .hero-section h1 {
        font-size: 2rem; 
        font-family: 'Cairo', sans-serif; 
        font-weight: 700;
        line-height: 1.2;
    }

    .hero-section p {
        font-size: 1.5rem; 
        font-family: 'Cairo', sans-serif; 
        font-weight: 400;
        margin-top: 20px;
    }

    .hero-section {
        height: 100vh; 
        padding-top: 100px; 
        justify-content: flex-start; 
    }

  
    .event-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        z-index: 2;
    }
    
    .event-text {
        font-size: 1.2rem;
        margin-bottom: 10px;
        cursor: pointer;
    }
  
    /* Social Icons */
    .social-icons {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        bottom: 20px;
        left: 20px;
        gap: 15px;
        z-index: 2;
    }
    .social-icons-rows{
        display: none !important;
    }
    .social-icon {
        color: white;
        padding: 10px;
        transition: opacity 0.3s ease, border-color 0.3s ease;
    }
  
    .btn-icons-hero:hover .social-icon {
        transform: scale(1.2) rotate(5deg); 
        color: #1867c0; 
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); 
    }

    .btn-icons-hero:hover {
        border-color: #1867c0;
    }
    .btn-icons-hero{
        background-color: transparent;
        border: 1px solid white;
    }
  @media (max-width: 768px) {
    .social-icon {
        font-size: 18px !important; 
        padding: 5px !important;  
    }
    .social-icons-coulmn{
        display: none !important;
    }
    .social-icons-rows{
        display: block !important;
        position: relative !important;
        bottom: 130px !important;
        left: -30% !important; 
    }
    .event-section {
        margin-top: 60px;
        }

    .btn-icons-hero {
        width: 35px;
        height: 35px;
        min-width: 35px; 
        border-width: 1px;
    }

}

  </style>
  