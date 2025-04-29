<template>
    <section class="event-section">
      <div class="overlay-background">
        <v-container fluid class="ma-0 pa-3 fill-height">
          <v-row class="fill-height" align="center" justify="center">
  
            <!-- main-slider -->
            <v-col cols="12" md="7" class="slider-section" order="2" order-md="1">
              <div class="main-slider">
  
             <!--main-image-->
              <div class="main-image-wrapper">
                <v-img :src="currentSlide.image" class="main-image" cover>
                     <!-- The overlay div for the caption and arrow -->
                    <div class="image-overlay">
                        <h2 class="image-title">{{ currentSlide.caption }}</h2>
                        <v-btn class="btn-sliders-event arrow-on-slider" icon @click="prevSlide">
                        <v-icon>mdi-chevron-left</v-icon>
                        </v-btn> 
                    </div>
                </v-img>
            
                  
  
                  <!-- small-image 2-->
                  <div class="small-image small-left">
                    <v-img :src="getSlideImage(currentIndex - 1)" class="small-img" cover>
                        <div class="image-overlay">
                       
                        </div>
                    </v-img>
                  </div>
  
                  <!-- small-image 3-->
                  <div class="small-image small-right">
                    <v-img :src="getSlideImage(currentIndex + 1)" class="small-img" cover>
                        <div class="image-overlay">
                       
                        </div>
                    </v-img>
                </div>
  
                </div>
  
                <!-- arrows -->
                <div class="arrows">
                  <v-btn class="btn-sliders-event" icon @click="prevSlide">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                  <v-btn class="btn-sliders-event" icon @click="nextSlide">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                </div>
  
              </div>
            </v-col
  
            <!-- info section -->
            <v-col cols="12" md="5" class="info-section" order="1" order-md="2">
                <div class="mobile-phrase-image-wrapper">
                    <v-img
                        src="/assets/aboutEventMobile.svg"
                        class="phrase-image-mobile"
                        style="width: 120px; height: 20px;"
                    ></v-img>
                </div>
               <div class="content-event">  
                   <div class="countdown">
                       <div class="time-box time" v-for="(item, index) in countdown" :key="index">
                       <div class="time-value time">{{ item.value }}</div>
                       <div class="time-label time">{{ item.label }}</div>
                    </div>
                    <h2 class="event-title">{{ currentSlide.caption }}</h2>
                    <p class="event-description">
                        مؤتمر المحامين 2024 هو الحدث الأبرز للمحامين والقانونيين في السعودية
                        يجمع المؤتمر نخبة من المتخصصين والخبراء لمناقشة أحدث التطورات القانونية وتبادل الخبرات.
                    </p>
                    <v-btn color="primary" class="learn-more-btn">
                        معرفة المزيد
                    </v-btn>
               </div>
                <!-- phrase-image -->
                <div class="phrase-image-wrapper">
                    <v-img
                    src="/assets/aboutEventFrame.png" 
                    class="phrase-image"
                    style="width:40px; height:100px;"        
                    
                    ></v-img>
                </div>
            </div>
            </v-col>
        </v-row>
        <v-row class="cont-slide-number">
            <div class="slide-number">
                <p> 
                    {{ currentIndex + 1 }}<span>__</span>  {{ slides.length }}
                </p>
            </div>
        </v-row>
        </v-container>
      </div>
    </section>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        slides: [
          { image: '/assets/eventPhoto1.png', caption: 'ملتقى قانوني يغير المستقبل' },
          { image: '/assets/eventPhoto2.png', caption: 'نحو مستقبل قانوني مشرق' },
          { image: '/assets/eventPhoto3.png', caption: 'قيادة التغيير القانوني' },
        ],
        countdown: [
          { value: 59, label: 'الثواني' },
          { value: 12, label: 'الدقائق' },
          { value: 13, label: 'الساعات' },
          { value: 38, label: 'الأيام' },
        ],
        currentIndex: 0,
        intervalId: null,
      };
    },
    computed: {
      currentSlide() {
        return this.slides[this.currentIndex];
      },
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      getSlideImage(index) {
        const correctedIndex = (index + this.slides.length) % this.slides.length;
        return this.slides[correctedIndex].image;
      },
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 5000);
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      }
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    }
  };
  </script>
  
  
  <style scoped lang="scss">
//    .v-expansion-panel,.v-expansion-panels{
//     background-color: transparent;

//   }
  .event-section {
    position: relative;
    overflow: hidden;
    background-color: #0A0A2A;
    min-height: 100vh;
    width: 100%;
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
  
  .v-container {
    position: relative;
    z-index: 2;
  }
  

  .slider-section {
    position: relative;
  }
  
  .main-slider {
    position: relative;
    width: 100%;
  }
  
    .main-image-wrapper {
    position: relative;
    height: 400px; 
    }

.main-image {
  width: 50%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  left:50%;
  transform: translateX(-50%);

}
.image-overlay {
    width:100%;
    height:100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(4, 4, 46, 0.5);  
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  z-index: 3;
}
.image-title {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 3;
}
.arrow-on-slider {
  position: absolute;
  top: 80%;
  left: 10px; 
  transform: translateY(-50%) rotate(45deg); 
  font-size: 20px;
  color: white;
  z-index: 3;
  background-color: transparent !important;
  border: 1px solid white !important;
}
.small-image {
  width: 120px;
  height: 80%; 
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top:10% !important;

}

.small-left {
  top: 0;
  left: 130px; 
}

.small-right {
  top: 0;
  right: 130px; 
}

.small-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: white;
}
.arrows{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:60px;

}
.btn-sliders-event{
    margin-left:20px;
    background-color: transparent;
    border: 2px solid #19195a;
    color:white;
    
}

.info-section {
    text-align: right;
    color: white;
    
}
.info-section > div{
      display: flex;
  }

  
  .phrase-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    width:40px;

  
}
.mobile-phrase-image-wrapper {
  display: none !important;
  margin-bottom: 16px;
}

.phrase-image {
  width: 100%;
  max-width: 300px; 
  height: auto;
  object-fit: contain;
}

  .countdown {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  .time-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 15px;
    border-radius: 10px;
    text-align: center;
  }
  
  .time-value {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .time-label {
    font-size: 0.9rem;
  }
  
  .event-title {
    margin: 20px 0;
    font-size: 2rem;
    font-weight: bold;
    width:100%;
    text-align: end;
    
}

.event-description {
    font-size: 1rem;
    margin-bottom: 30px;
    text-align: end;
  }
  
  .learn-more-btn {
    background-color: #5D5FEF;
    color: white;
    font-weight: bold;
}
.cont-slide-number{

    //   background-color: #5D5FEF;
      display:flex;
      justify-content: flex-end;
      align-items: center;


      .slide-number{
          //   background-color: #5D5FEF;
            margin-top:20px;
            display:block !important;
            padding-right:60px;
            p{
                color:white;
                span{
                    margin:5px;
                    color: #19195a !important;
                }
      
            }
      
        }
}
.small-image {
  width: 200px;
}
.time{
    padding: 5px;
    font-size:15px;
}
  @media (max-width: 768px) {
    .slide-number{
          //   background-color: #5D5FEF;
            margin-top:0px !important;
            margin-bottom:15px !important;
        }
    .main-image {
     width: 80%;
    }
    .phrase-image-wrapper {
    display: none; 
  }

  .mobile-phrase-image-wrapper {
    display: flex !important; 
  }

}
  </style>
  