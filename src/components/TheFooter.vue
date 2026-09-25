<template>
  <footer class="site-footer bg-dark text-light pt-5 pb-3 mt-5 position-relative">
    <!-- خط نورانی یا گرادیان باریک بالای فوتر -->
    <div class="footer-top-accent"></div>

    <div class="container pt-4">
      <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
        <!-- ستون اول: درباره برند -->
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="d-flex align-items-center mb-3">
            <span class="brand-badge me-2">M</span>
            <h5 class="fw-bold mb-0 text-white tracking-wide">متن کامل</h5>
          </div>
          <p class="text-secondary small lh-lg mb-3">
            پلتفرم جامع سبک زندگی، ارتقای فردی . ما آگاهی را در کنار هم به شما هدیه می‌دهیم تا
            بهترین نسخه خودتان باشید.
          </p>
          <div class="d-flex gap-2 social-links">
            <a href="#" class="btn-social" title="اینستاگرام" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="btn-social" title="تلگرام" aria-label="Telegram">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="#" class="btn-social" title="توییتر / X" aria-label="Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#" class="btn-social" title="لینکدین" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- ستون دوم: دسترسی سریع -->
        <div class="col-lg-2 col-md-6 col-6 mb-3">
          <h6 class="footer-title fw-bold text-white mb-3">دسترسی سریع</h6>
          <ul class="list-unstyled footer-links small">
            <li class="mb-2">
              <router-link to="/" class="footer-link">صفحه اصلی</router-link>
            </li>
            <li class="mb-2">
              <a href="#articles-section" class="footer-link">مجله و مقالات</a>
            </li>
          </ul>
        </div>

        <!-- ستون سوم: مقالات پربازدید -->
        <div class="col-lg-3 col-md-6 col-6 mb-3">
          <h6 class="footer-title fw-bold text-white mb-3">منتخب مقالات</h6>
          <ul class="list-unstyled footer-links small">
            <li class="mb-2">
              <router-link to="/article/what-is-sadness" class="footer-link"
                >ناراحتی چیست و چرا رخ می‌دهد؟</router-link
              >
            </li>
            <li class="mb-2">
              <router-link to="/article/tim-berners-lee-story" class="footer-link"
                >داستان تیم برنرز-لی</router-link
              >
            </li>
          </ul>
        </div>

        <!-- ستون چهارم: خبرنامه اختصاصی -->
        <div class="col-lg-3 col-md-6 mb-3">
          <h6 class="footer-title fw-bold text-white mb-3">عضویت در خبرنامه</h6>
          <p class="text-secondary small mb-3">
            جدیدترین مقالات و تخفیف‌های ویژه فروشگاه را در ایمیل خود دریافت کنید.
          </p>
          <form @submit.prevent="handleSubscribe" class="newsletter-form">
            <div class="input-group mb-2">
              <input
                type="email"
                v-model="email"
                placeholder="ایمیل خود را وارد کنید..."
                class="form-control form-control-sm bg-secondary bg-opacity-25 border-secondary text-light placeholder-secondary"
                required
              />
              <button class="btn btn-primary btn-sm px-3 fw-bold" type="submit">عضویت</button>
            </div>
            <div v-if="subscribed" class="text-success small mt-1 animate-fade">
              با موفقیت ثبت شد! سپاس از همراهی شما.
            </div>
          </form>
        </div>
      </div>

      <!-- نوار پایینی کپی رایت -->
      <div class="row pt-3 align-items-center text-secondary small">
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          تمامی حقوق مادی و معنوی محفوظ است © ۲۰۲۶ | طراحی شده با اشتیاق
        </div>
        <div class="col-md-6 text-center text-md-end">
          <button
            @click="scrollToTop"
            class="btn btn-link text-secondary text-decoration-none p-0 btn-back-to-top"
          >
            بازگشت به بالا <i class="bi bi-arrow-up-short fs-5 align-middle"></i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

const handleSubscribe = () => {
  if (email.value.trim()) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 4000)
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.site-footer {
  background-color: #0f141c !important;
  color: #adb5bd;
  font-family: inherit;
}

.footer-top-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0d6efd 0%, #0dcaf0 50%, #6610f2 100%);
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, #0d6efd, #0dcaf0);
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
}

.footer-title {
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25px;
  height: 2px;
  background-color: #0d6efd;
  border-radius: 2px;
}

.footer-link {
  color: #8a99a8;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  display: inline-block;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(-4px);
}

.btn-social {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: #adb5bd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-social:hover {
  background-color: #0d6efd;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 5px 12px rgba(13, 110, 253, 0.35);
}

.newsletter-form input {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.15);
}

.newsletter-form input:focus {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #0d6efd;
  box-shadow: none;
}

.placeholder-secondary::placeholder {
  color: #6c757d;
}

.btn-back-to-top {
  transition: color 0.2s ease;
}

.btn-back-to-top:hover {
  color: #0d6efd !important;
}

.animate-fade {
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
