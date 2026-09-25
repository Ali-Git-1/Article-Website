<script setup lang="ts">
import TheFooter from './components/TheFooter.vue'
</script>

<!-- src/App.vue -->
<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar مدرن با منوی موبایلی هوشمند -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow py-3">
      <div class="container">
        <router-link class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <i class="bi bi-journal-richtext text-warning fs-4"></i>
          <span>متن کامل</span>
        </router-link>

        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/">صفحه اصلی</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="/#articles">مقالات</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="/#services">خدمات ما</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#contact">تماس با ما</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- محتوای صفحات -->
    <main class="flex-grow-1">
      <router-view />
    </main>

    <!-- فوتر شیک -->
    <the-footer />
  </div>
</template>

<style>
@import '@/assets/main.css';
</style>
