<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

// Получаем только видимые роуты (без скрытых служебных)
const routes = computed(() =>
  router.options.routes.filter(r => r.name && r.path && r.path !== '*')
);

const currentIndex = computed(() =>
  routes.value.findIndex(r => r.path === route.path)
);

const prevRoute = computed(() =>
  currentIndex.value > 0 ? routes.value[currentIndex.value - 1] : null
);
const nextRoute = computed(() =>
  currentIndex.value < routes.value.length - 1 ? routes.value[currentIndex.value + 1] : null
);

function goTo(path) {
  if (path) router.push(path);
}
</script>

<template>
  <div class="pages-pagination">
    <div class="pagination-card" v-if="prevRoute">
      <div class="pagination-label">Previous</div>
      <SimpleUiButton
        :buttonText="`« ${prevRoute.name}`"
        color="danger"
        animation="swipe"
        @click="goTo(prevRoute.path)"
        left
      />
    </div>
    <div class="pagination-card" v-if="nextRoute">
      <div class="pagination-label right">Next</div>
      <SimpleUiButton
        :buttonText="`${nextRoute.name} »`"
        color="danger"
        animation="swipe"
        @click="goTo(nextRoute.path)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.pages-pagination {
  display: flex;
  gap: 32px;
  justify-content: flex-end;
  align-items: stretch;
  margin: 0;
}

.pagination-card {
  flex: 1 1 0;
  border: 2px solid #5a5a6a;
  border-radius: 12px;
  padding: 24px 32px;
  background: #232326;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 280px;
}
.pagination-label {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 500;
}
.pagination-label.right {
  text-align: right;
}
:deep(.smpl-btn) {
  font-size: 1.4rem;
  font-weight: bold;
  color: #e61a5f;
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  transition: color 0.2s;
}
:deep(.smpl-btn:hover) {
  color: #fff;
}
</style>