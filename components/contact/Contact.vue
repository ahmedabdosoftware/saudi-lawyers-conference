<template>
  <section class="contact-section">
    <v-container class="contact-container" >
      <!-- title row-->
      <div class="title-row">
        <div class="section-title">
          <v-img
              src="/assets/contactTitle.svg"
              class="phrase-image-mobile"
              style="width: 200px; height: 30px;"
          ></v-img>
        </div>
      </div>

      <!-- Form -->
      <div class="content-row">
        <div class="form-side">
          <v-form ref="formRef" @submit.prevent="handleSubmit" class="form-fields">
            <v-text-field
              v-model="form.name"
              label="الاسم بالكامل"
              :rules="[rules.required]"
              dense
              hide-details
              solo
              flat
            ></v-text-field>
            <v-text-field
            v-model="form.email"
            label="البريد الالكتروني"
              :rules="[rules.required, rules.email]"
              dense
              hide-details
              solo
              flat
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              label="رقم الهاتف"
              dense
              hide-details
              solo
              flat
            ></v-text-field>
            <v-textarea
            v-model="form.message"
            label="الرسالة"
              dense
              hide-details
              solo
              flat
            ></v-textarea>
            <v-btn
              :loading="loading"
              type="submit"
              color="primary"
              class="submit-btn"
              depressed
            >
              إرسال
            </v-btn>
          </v-form>
        </div>

        <div class="text-side">
          <h2>
            تواصل <span class="line-made">معنا</span>
          </h2>
          <h2>
            للإنضمام <span class="line-made">______</span><br>للمؤتمر
          </h2>
        </div>
      </div>
    </v-container>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const formRef = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const loading = ref(false)

const toast = useToast()

const rules = {
  required: value => !!value || 'هذا الحقل مطلوب',
  email: value => /.+@.+\..+/.test(value) || 'بريد إلكتروني غير صحيح',
}

const handleSubmit = async () => {
  const { valid } = await formRef.value.validate()

  if (!valid) {
    toast.error('يرجى ملء جميع الحقول بشكل صحيح')
    return
  }

  loading.value = true
  try {
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('phone', form.value.phone)
    formData.append('message', form.value.message)

    const data = await $fetch('https://task.code7x.com/api/contact-us', {
      method: 'POST',
      body: formData,
    })

    if (data.code === 200) {
      toast.success(data.message)
      form.value = { name: '', email: '', phone: '', message: '' }
    } else {
      console.log("data",data)
      toast.error(data.message || 'حدث خطأ غير متوقع')
    }
  }  catch (err) {
    console.log(err) 
    const message = err?.data?.message || err.message || 'فشل الاتصال بالخادم'
    toast.error(message)
  }

  
  finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-section {
  width: 100%;
  min-height: 100vh;
  background-image: url('/assets/bgEvent.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 50px 0;
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.content-row {
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 50px;
}

/* Form */

.form-side {
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
animation: fadeInLeft 1s ease;
}

/* text */
.text-side {
width: 50%;
color: white;
text-align: right;
animation: fadeInRight 1s ease;
font-size: 35px;
}


::v-deep(.v-input__control) {
border-bottom: 1px solid white ; 
}

::v-deep(.v-label),::v-deep(.v-label.v-field-label) {
color: white !important;
text-align: right !important;
}

::v-deep(.v-input input),
::v-deep(.v-textarea textarea) {
direction: rtl !important;
text-align: right !important;
}

::v-deep(.v-input input::placeholder),
::v-deep(.v-textarea textarea::placeholder) {
color: #cccccc; 
text-align: right !important;
}
::v-deep(.v-text-field input),::v-deep(.v-textarea textarea){
  color:white;
}
::v-deep(.v-field__field){
  direction: rtl !important;
}
::v-deep(.v-field__overlay){
  background-color: transparent !important;
}
.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color:white;
}

.section-title .line {
  flex: 1;
  height: 1px;
  background-color: white;
  margin: 0 10px;
}

.form-fields {
  width: 100%;
}

.submit-btn {
  margin-top: 20px;
  width: 120px;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}


  @media (max-width: 960px) {
  .content-row {
      flex-direction: column;
  }
  .form-side, .text-side {
      width: 100%;
      text-align: center;
  }
  }

@media (max-width: 960px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }
  .form-side{
      order:2;
  }
  .text-side{
      order:1;
  }
  .hidden-res{
      display:none;
  }
  .form-side, .text-side {
    width: 100%;
    text-align: center;
  }
}
</style>
