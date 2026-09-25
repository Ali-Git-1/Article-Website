<!-- src/views/HomeView.vue -->
<template>
  <div class="homepage-wrapper">
    <!-- بخش Hero با پس‌زمینه ویدیو / بنر گرادینت -->
    <section
      class="hero-section position-relative text-white text-center py-5 d-flex align-items-center justify-content-center"
    >
      <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <!-- در صورت تمایل ویدیو فعال باشد -->

      <video
        autoplay
        loop
        muted
        playsinline
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
      >
        <source src="/public/videos/6549270-uhd_2160_3840_25fps.mp4" type="video/mp4" />
      </video>

      <div class="container position-relative z-1 py-5">
        <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3 shadow">
          پایگاه مقالات مفهومی و کوتاه
        </span>
        <h1 class="display-4 fw-black mb-3">وبسایت متن کامل (Text Full)</h1>
        <p class="lead text-light mb-4 mx-auto" style="max-width: 650px">
          راهکارهایی برای آرامش ذهن، رشد فردی و انگیزه روزانه با مقالاتی کوتاه و کاربردی
        </p>

        <!-- کامپوننت جستجوی هوشمند مقالات -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 text-start">
            <SearchBar :items="store.articles" :onSelect="onSearchResultSelect" />
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5">
      <!-- فیلتر دسته‌بندی‌ها (دکمه‌های اسکرولی در موبایل) -->
      <div
        class="d-flex gap-2 overflow-auto pb-3 mb-4 justify-content-start justify-content-md-center"
      >
        <button
          class="btn rounded-pill px-4 text-nowrap"
          :class="selectedCategory === 'all' ? 'btn-dark' : 'btn-outline-secondary'"
          @click="selectedCategory = 'all'"
        >
          همه مقالات
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          class="btn rounded-pill px-4 text-nowrap"
          :class="selectedCategory === cat ? 'btn-dark' : 'btn-outline-secondary'"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- لیست مقالات با گرید Bootstrap -->
      <section id="articles" class="mb-5">
        <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
          <h3 class="fw-bold m-0 fs-4">
            <i class="bi bi-grid-fill text-primary me-2"></i> مقالات کوتاه و مفهومی
          </h3>
          <span class="text-muted small"> {{ displayArticles.length }} مقاله یافت شد </span>
        </div>

        <div v-if="displayArticles.length > 0" class="row g-4">
          <ArticleCard v-for="item in displayArticles" :key="item.id" :article="item" />
        </div>

        <!-- پیام عدم یافت مقاله -->
        <div v-else class="text-center py-5 my-4 bg-white rounded-4 border">
          <i class="bi bi-search display-3 text-muted"></i>
          <h5 class="fw-bold mt-3 text-secondary">مقاله‌ای با این مشخصات پیدا نشد!</h5>
          <p class="text-muted small">
            لطفاً عبارت دیگری را جستجو کنید یا فیلتر دسته‌بندی را تغییر دهید.
          </p>
        </div>
      </section>

      <!-- بخش خدمات ما -->
      <section id="services" class="my-5 py-4 bg-white rounded-4 p-4 p-md-5 border shadow-sm">
        <div class="text-center mb-5">
          <span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-bold mb-2"
            >ویژگی‌ها</span
          >
          <h3 class="fw-bold">خدمات وبسایت ما</h3>
          <p class="text-muted">چه چیزی وبسایت متن کامل را متمایز می‌کند؟</p>
        </div>

        <div class="row g-4 text-center">
          <div class="col-12 col-md-4">
            <div class="p-4 rounded-4 bg-light h-100">
              <i class="bi bi-lightning-charge-fill text-warning display-5 mb-3 d-inline-block"></i>
              <h5 class="fw-bold">خلاصه و مفید</h5>
              <p class="text-muted small mb-0">
                مطالعه سریع در کمتر از ۵ دقیقه بدون زیاده‌گویی و محتوای اضافه.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-4 rounded-4 bg-light h-100">
              <i class="bi bi-heart-pulse-fill text-danger display-5 mb-3 d-inline-block"></i>
              <h5 class="fw-bold">تمرکز بر سلامت روان</h5>
              <p class="text-muted small mb-0">
                ارائه راهکارهای عملی برای غلبه بر تنش‌ها، غم و استرس روزمره.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-4 rounded-4 bg-light h-100">
              <i class="bi bi-phone-fill text-primary display-5 mb-3 d-inline-block"></i>
              <h5 class="fw-bold">طراحی کاملاً ریسپانسیو</h5>
              <p class="text-muted small mb-0">
                تجربه مطالعه بدون نقص در گوشی موبایل، تبلت و کامپیوتر.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- دکمه شناور بازگشت به بالا -->
    <button
      @click="scrollToTop"
      class="btn btn-primary rounded-circle shadow-lg position-fixed bottom-0 start-0 m-4 z-3 d-flex align-items-center justify-content-center"
      style="width: 50px; height: 50px"
      aria-label="بازگشت به بالا"
    >
      <i class="bi bi-chevron-up fs-5"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useArticleStore } from '@/stores/articleStore'
import ArticleCard from '@/components/ArticleCard.vue'
import SearchBar from '@/components/SearchBar.vue'

const router = useRouter()
const store = useArticleStore()

// تابعی که وقتی کاربر روی نتیجه سرچ کلیک کرد، او را به مقاله می‌برد
const onSearchResultSelect = (item) => {
  router.push(`/article/${item.slug || item.id}`)
}

const selectedCategory = ref('all')

const categories = ['روانشناسی', 'سلامتی', 'روابط', 'فناوری']

const displayArticles = computed(() => {
  let list = store.filteredArticles
  if (selectedCategory.value !== 'all') {
    list = list.filter((item) => item.category === selectedCategory.value)
  }
  return list
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.hero-section {
  min-height: 480px;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
}
.hero-section video {
  opacity: 0.35;
}
</style>
