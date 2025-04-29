<template>
  <v-container fluid class="footer-section py-12 px-6 text-white" style="background-color: #0a0c38;">
    <v-row justify="center">
      <!-- Logo + Title -->
      <v-col cols="12" class="text-center mb-6">
        <v-img src="/assets/footer-logo.png" contain height="80" class="mx-auto mb-2" />
        <div class="text-h6 font-weight-bold">مؤتمر المحاماة السعودي</div>
        <div class="text-subtitle-2">Saudi Lawyers Conference</div>

        <!-- Social Icons -->
        <div class="d-flex justify-center mt-4 gap-4 ">
          <v-icon class="tra mr-5" icon="mdi-facebook" size="24" />
          <v-icon class="tra mr-5" icon="mdi-linkedin" size="24" />
          <v-icon class="tra mr-5" icon="mdi-twitter" size="24" />
          <v-icon class="tra mr-5" icon="mdi-instagram" size="24" />
        </div>
      </v-col>

      <!-- Links Columns -->
      <v-col cols="12" md="10">
        <v-row justify="center" class="text-center text-md-right">
          <v-col cols="4" md="4" sm="4">
            <h4 class="mb-2 font-weight-bold">الرئيسية</h4>
            <div>عن الحدث</div>
            <div>المتحدثين</div>
            <div>الأسئلة المكررة</div>
          </v-col>
          <v-col cols="4" md="4" sm="4">
            <h4 class="mb-2 font-weight-bold">عن المؤتمر</h4>
            <div>عن الحدث</div>
            <div>الشركاء</div>
            <div>الانضمام</div>
          </v-col>
          <v-col cols="4" md="4" sm="4">
            <h4 class="mb-2 font-weight-bold">للتواصل</h4>
            <div><p class="font-s">Saudi@Gmail.com</p></div>
            <div>051234567</div>
            <div>Riyadh, Saudi Arabia</div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Decorative line image -->
      <v-col cols="12" class="text-center my-6">
        <v-img src="/assets/footer-line.png" height="24" contain class="mx-auto" />
      </v-col>

      <!-- Bottom bar -->
      <v-col cols="12" md="10" class="d-flex flex-column flex-md-row justify-space-between align-center text-center text-md-left">
        <div class="d-flex align-center justify-center justify-md-end mt-2 mt-md-0 Bottom-bar">
          <v-img src="/assets/sbaLogo.png" width="100px" height="40" class="mr-5 img-bar" />
          <span class="text-caption mr-5">الراعي الرسمي للمؤتمر</span>
        </div>
        <div class="text-caption mt-2 mt-md-0">
          جميع الحقوق محفوظة لمؤتمر المحاماة السعودي
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer-section {
  direction: rtl;
  background-image: url('/assets/bgEvent.png');
    background-size: cover;
    background-position: center;
}
.tra{
     background-color: transparent;
     color:#5f5f9b;
       
  &:hover {
    background-color: #ffffff20; 
    color: #ffffff;
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
}



@media (max-width: 768px) {
  
  .font-s{
    font-size:12px !important;
  }
  .Bottom-bar{
    span{
      order:1;
    }
    .img-bar{
      order:2;
      

    }
  }
}
</style>
