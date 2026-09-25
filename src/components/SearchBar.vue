<template>
  <div class="search-container my-4">
    <div class="search-wrapper position-relative">
      <!-- آیکون ذره‌بین -->
      <i class="bi bi-search search-icon"></i>

      <!-- فیلد ورودی -->
      <input
        type="text"
        v-model="searchQuery"
        class="form-control form-control-lg search-input shadow-sm"
        placeholder="جستجوی مقالات، موضوعات یا کلمات کلیدی..."
        @input="onInput"
      />

      <!-- دکمه پاک کردن (Clear) -->
      <button v-if="searchQuery" @click="clearSearch" class="btn-clear">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- نمایش نتایج سریع (Dropdown) -->
    <div v-if="results.length > 0" class="search-results-dropdown shadow-lg border rounded">
      <div class="results-header px-3 py-2 text-muted small border-bottom">
        نتایج یافت شده: {{ results.length }} مورد
      </div>
      <ul class="list-unstyled mb-0">
        <li
          v-for="item in results"
          :key="item.id"
          class="result-item px-3 py-2 border-bottom"
          @click="selectResult(item)"
        >
          <div class="d-flex align-items-center">
            <!-- نمایش تصویر کوچک اگر موجود باشد -->
            <img v-if="item.image" :src="item.image" class="rounded me-2" width="30" height="30" />
            <div class="item-info">
              <div class="item-title text-dark fw-bold">{{ item.title }}</div>
              <div class="item-category small text-muted">{{ item.category || item.type }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- پیام اگر چیزی پیدا نشد -->
    <div
      v-else-if="hasSearched && searchQuery.length > 0"
      class="text-center py-3 text-muted small mt-2"
    >
      <i class="bi bi-exclamation-circle d-block fs-4 mb-1"></i>
      نتیجه‌ای برای "{{ searchQuery }}" یافت نشد.
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// تعریف Props برای دریافت داده‌ها و ارسال رویدادها به والد
const props = defineProps({
  items: {
    type: Array,
    required: true, // لیست کل داده‌ها (مقالات + محصولات)
  },
  onSelect: {
    type: Function,
    required: true, // تابعی که هنگام کلیک روی نتیجه اجرا می‌شود
  },
})

const emit = defineEmits(['update:query'])

const searchQuery = ref('')
const results = ref([])
const hasSearched = ref(false)
let debounceTimer = null

// تابع اصلی جستجو
const performSearch = () => {
  const query = searchQuery.value.toLowerCase().trim()
  hasSearched.value = true

  if (query === '') {
    results.value = []
    return
  }

  // الگوریتم جستجوی هوشمند (جستجو در عنوان و توضیحات)
  results.value = props.items
    .filter((item) => {
      const title = (item.title || '').toLowerCase()
      const desc = (item.description || '').toLowerCase()
      return title.includes(query) || desc.includes(query)
    })
    .slice(0, 6) // محدود کردن به ۶ نتیجه اول برای زیبایی
}

// اعمال Debounce برای جلوگیری از اجرای سنگین
const onInput = () => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    performSearch()
  }, 300) // ۳۰۰ میلی‌ثانیه تاخیر
}

const clearSearch = () => {
  searchQuery.value = ''
  results.value = []
  hasSearched.value = false
}

const selectResult = (item) => {
  props.onSelect(item)
  clearSearch()
}
</script>

<style scoped>
.search-wrapper {
  transition: all 0.3s ease;
}

.search-input {
  padding: 0.75rem 3rem 0.75rem 1.25rem;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  font-size: 1rem;
}

.search-input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
  z-index: 5;
}

.btn-clear {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #adb5bd;
  padding: 0;
  line-height: 1;
}

.btn-clear:hover {
  color: #dc3545;
}

.search-results-dropdown {
  position: absolute;
  width: 100%;
  z-index: 1000;
  background: white;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 5px;
}

.result-item {
  cursor: pointer;
  transition: background 0.2s ease;
}

.result-item:hover {
  background-color: #f8f9fa;
}

.item-title {
  font-size: 0.9rem;
}

.item-category {
  font-size: 0.75rem;
}

/* برای سایت‌های فارسی (RTL) */
:deep(.bi-search) {
  right: 1rem;
  left: auto;
}

/* تنظیمات برای حالت RTL */
[dir='rtl'] .search-icon {
  left: 1rem;
  right: auto;
}
[dir='rtl'] .btn-clear {
  left: auto;
  right: 0.75rem;
}
</style>
