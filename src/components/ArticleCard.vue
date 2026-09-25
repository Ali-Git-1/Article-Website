<!-- در کامپوننت ArticleCard.vue -->
<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100 rounded-4 overflow-hidden bg-white shadow-sm border-0 article-card">
      <!-- محفظه عکس با ارتفاع ثابت و متناسب -->
      <div style="height: 200px; width: 100%; overflow: hidden; position: relative">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-100 h-100"
          style="object-fit: cover"
        />
        <span
          class="badge bg-primary position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill shadow-sm"
        >
          {{ article.category }}
        </span>
      </div>

      <!-- بدنه کارت -->
      <div class="card-body d-flex flex-column p-4 text-end">
        <h5 class="fw-bold mb-3">{{ article.title }}</h5>
        <p class="text-muted small mb-4 flex-grow-1" style="line-height: 1.7">
          {{ article.description }}
        </p>
        <div class="d-flex justify-content-between align-items-center pt-3 border-top">
          <a
            :href="
              $router.resolve({
                name: 'article-detail',
                params: { slug: article.slug },
              }).href
            "
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary rounded-pill w-100"
          >
            ادامه مطلب
          </a>
          <span class="text-muted small"> {{ article.readTime }} <i class="bi bi-clock"></i> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>
