<template>
    <section class="faq-section">
      <div class="overlay-background">
        <v-container fluid class="pa-6">
           <!-- title row-->
          <div class="title-row">
            <div class="section-title">
              <v-img
                  src="/assets/fqsTitle.svg"
                  class="phrase-image-mobile"
                  style="width: 200px; height: 30px;"
              ></v-img>
            </div>

          </div>
          <v-expansion-panels
            v-model="panel"
            accordion
            class="faq-expansion-panels"
          >
            <v-expansion-panel
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-panel"
            >
              <v-expansion-panel-title class="faq-panel-title">
                <div class="faq-title-wrapper">
                  <span class="faq-question">{{ faq.question }}</span>
                  <div class="arrow-circle">
                    <v-icon>mdi-chevron-down</v-icon>
                  </div>
                </div>
              </v-expansion-panel-title>
  
              <v-expansion-panel-text class="faq-answer">
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  
          <div v-if="pending" class="text-center mt-6">
            جاري التحميل...
          </div>
  
          <div v-if="error" class="text-center text-error mt-6">
            حدث خطأ أثناء تحميل الأسئلة.
          </div>
  
        </v-container>
      </div>
    </section>
  </template>
  
  <script setup>
  const { data, pending, error } = await useFetch('https://task.code7x.com/api/faqs');
  
  const faqs = computed(() => data.value?.data || []);
  const panel = ref(null);
  </script>
  
  <style scoped lang="scss">

  .faq-section {
    position: relative;
    overflow: hidden;
    background-color: #0A0A2A;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url('/assets/bgEvent.png');
    background-size: cover;
    background-position: center;
  }
  
  .overlay-background {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .overlay-background::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background-image: url('/assets/bgEventBall.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.3;
  }
  
  .faq-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
  
  .faq-expansion-panels {
    direction: rtl; 
  }
  
  .faq-panel-title {
    background-color: #0A0A2A;
  }
  
  .faq-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .faq-question {
    font-size: 20px;
    color: #ffffff;
    text-align: right;
  }
  
  .arrow-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ffffff20; 
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  ::v-deep(.v-expansion-panel-title__icon){
    display: none;
  }
  .arrow-circle v-icon {
    color: #fff;
    font-size: 24px;
    transition: 0.3s;
  }
  
  .faq-panel--active .arrow-circle v-icon {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    font-size: 18px;
    color: #cccccc;
    text-align: right;
  }
  
  </style>
  