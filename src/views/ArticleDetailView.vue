<!-- src/views/ArticleDetailView.vue -->
<template>
  <div class="container py-5" v-if="article">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <!-- دکمه بازگشت به صفحه اصلی -->
        <router-link to="/" class="btn btn-outline-secondary mb-4 rounded-pill">
          <i class="bi bi-arrow-right me-1"></i> بازگشت به لیست مقالات
        </router-link>

        <article class="bg-white p-4 p-md-5 rounded-4 shadow-sm">
          <!-- برچسب و زمان مطالعه -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge bg-primary px-3 py-2 rounded-pill">{{ article.category }}</span>
            <span class="text-muted small">
              <i class="bi bi-clock me-1"></i> زمان مطالعه: {{ article.readTime }}
            </span>
          </div>

          <!-- عنوان مقاله -->
          <h1 class="fw-bold text-dark mb-4">{{ article.title }}</h1>

          <!-- تصویر شاخص مقاله -->
          <img
            :src="article.image"
            :alt="article.title"
            class="img-fluid rounded-3 mb-4 w-100 object-fit-cover"
            style="max-height: 420px"
          />

          <!-- خلاصه و متن مقاله -->
          <p class="lead text-secondary mb-4">
            {{ article.description }}
          </p>

          <hr class="my-4" />

          <!-- متن کامل مقاله -->
          <div class="article-body lh-lg text-dark" v-html="article.content"></div>
        </article>
      </div>
    </div>
  </div>

  <!-- اگر مقاله با این اسلاگ پیدا نشد -->
  <div class="container py-5 text-center" v-else>
    <div class="py-5">
      <i class="bi bi-exclamation-circle text-danger display-1"></i>
      <h3 class="mt-3">مقاله مورد نظر یافت نشد!</h3>
      <router-link to="/" class="btn btn-primary mt-3 rounded-pill px-4">
        بازگشت به صفحه اصلی
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/articleStore'

const route = useRoute()
const store = useArticleStore()

// پیدا کردن مقاله بر اساس پارامتر slug از URL
const article = computed(() => {
  return store.articles.find((item) => item.slug === route.params.slug)
})

watch(
  article,
  (newArticle) => {
    if (newArticle) {
      document.title = `${newArticle.title}`
    } else {
      document.title = 'مقاله پیدا نشد'
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.article-body {
  font-size: 1.1rem;
}
</style>
