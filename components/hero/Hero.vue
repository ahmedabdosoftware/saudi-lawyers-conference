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
      <div style=" display: flex !important; flex-direction: column !important; position: absolute; bottom: 0px; left: 20px; gap: 15px; z-index: 2;" class="social-icons">
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
    flex-direction: column !important;
    position: absolute;
    bottom: 20px;
    left: 20px;
    gap: 15px;
    z-index: 2;
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
  /* Animations */
  .fade-slide-down-enter-active,
  .fade-slide-up-enter-active {
    transition: all 1s ease;
  }
  
  .fade-slide-down-enter,
  .fade-slide-up-enter {
    opacity: 0;
  }
  
  .fade-slide-down-enter {
    transform: translateY(-30px);
  }
  
  .fade-slide-up-enter {
    transform: translateY(30px);
  }
  
  /* Fade for socials */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Bounce for Arrow */
  .bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  @media (max-width: 768px) {
  .social-icon {
    font-size: 18px !important; 
    padding: 5px !important;   
  }

  .btn-icons-hero {
    width: 35px;
    height: 35px;
    min-width: 35px; 
    border-width: 1px;
  }
}

  </style>
  