<script setup>
import { ref, computed } from 'vue';
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";

// Свойства компонента
const props = defineProps({
  componentTitle: {
    type: String,
    required: true
  },
  componentDescription: {
    type: String,
    default: 'A component from SimpleUI Kit.'
  },
  demoCode: {
    type: String,
    default: ''
  },
  importCode: {
    type: String,
    default: "import { Component } from '@/lib/components/Component.vue';"
  },
  componentProps: {
    type: Array,
    default: () => []
  },
  componentEvents: {
    type: Array,
    default: () => []
  },
  componentSlots: {
    type: Array,
    default: () => []
  },
  componentExamples: {
    type: Array,
    default: () => []
  }
});

// Локальное состояние
const isButtonShow = ref(false);
const activeTab = ref('props');

// Вкладки документации
const docsTabs = [
  { id: 'props', label: 'Props' },
  { id: 'events', label: 'Events' },
  { id: 'slots', label: 'Slots' },
  { id: 'examples', label: 'Examples' }
];

// Функция копирования импорта
const copyImport = () => {
  navigator.clipboard.writeText(props.importCode);
  // Тут можно добавить всплывающее уведомление о копировании
};
</script>

<template>
  <div class="page-container">
    <!-- Правая часть: документация API -->
    <div class="api-docs-section">
      <div class="api-docs-header">
        <h2>API Reference</h2>
        <SimpleUiButton buttonText="Copy Import" color="minimal_dark" size="small" @click="copyImport">
          <SimpleUiIcon icon="copy" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>


      <!-- Вкладки документации -->
      <div class="api-docs-tabs">
        <div
            v-for="tab in docsTabs"
            :key="tab.id"
            :class="['api-docs-tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </div>
      </div>

      <!-- Содержимое документации -->
      <div class="api-docs-content">
        <!-- Вкладка с пропсами -->
        <div v-if="activeTab === 'props'" class="api-props">
          <table class="api-table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="prop in componentProps" :key="prop.name">
              <td>
                <code>{{ prop.name }}</code>
                <span v-if="prop.required" class="required-badge">required</span>
              </td>
              <td><code>{{ prop.type }}</code></td>
              <td><code v-if="prop.default !== undefined">{{ prop.default }}</code></td>
              <td>{{ prop.description }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- Вкладка с событиями -->
        <div v-if="activeTab === 'events'" class="api-events">
          <table class="api-table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Parameters</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="event in componentEvents" :key="event.name">
              <td><code>{{ event.name }}</code></td>
              <td><code v-if="event.params">{{ event.params }}</code></td>
              <td>{{ event.description }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- Вкладка со слотами -->
        <div v-if="activeTab === 'slots'" class="api-slots">
          <table class="api-table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="slot in componentSlots" :key="slot.name">
              <td><code>{{ slot.name }}</code></td>
              <td>{{ slot.description }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- Вкладка с примерами -->
        <div v-if="activeTab === 'examples'" class="api-examples">
          <div v-for="(example, index) in componentExamples" :key="index" class="example-item">
            <h3>{{ example.title }}</h3>
            <p>{{ example.description }}</p>
            <SimpleUiCodeBlock :code="example.code" language="html"></SimpleUiCodeBlock>
            <div class="example-result">
              <div class="result-label">Result:</div>
              <div class="result-preview" v-html="example.preview"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.page-container {
  display: grid;
  grid-template-columns: 1fr 1fr; // Равное разделение экрана
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
}

// Левая часть - демонстрация
.demo-section {
  padding: 1.5rem;
  overflow-y: auto;

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    p {
      margin: 0;
    }
  }
}

// Правая часть - документация API
.api-docs-section {
  background-color: #1e1e2e; // Немного светлее основного фона
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow-y: auto;
  height: 100%;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
}

.api-docs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #ffffff;
  }
}

.api-docs-import-block {
  margin-bottom: 1.5rem;
  background-color: #191927;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.api-docs-tabs {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #383850;
}

.api-docs-tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #a0a0c0;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: var(--smpl-ui-primary, #6979f8);
    border-bottom: 2px solid var(--smpl-ui-primary, #6979f8);
  }
}

.api-docs-content {
  margin-top: 1rem;
}

// Стили для таблиц
.api-table {
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 0.75rem;
    border-bottom: 1px solid #383850;
  }

  th {
    color: #a0a0c0;
    font-weight: 500;
  }

  td {
    color: #e0e0f0;
  }

  code {
    padding: 0.125rem 0.25rem;
    background-color: #242436;
    border-radius: 0.25rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
  }

  .required-badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.125rem 0.375rem;
    background-color: #6979f8;
    color: white;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
}

// Стили для примеров
.example-item {
  margin-bottom: 2rem;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .example-result {
    margin-top: 1rem;

    .result-label {
      color: #a0a0c0;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .result-preview {
      padding: 1rem;
      background-color: #242436;
      border-radius: 0.25rem;
    }
  }
}

// Анимации
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Медиа-запросы для отзывчивого дизайна
@media (max-width: 1200px) {
  .page-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .api-docs-section {
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }
}

// Более темная цветовая схема для соответствия скриншоту
:deep(body) {
  background-color: #14141d;
  color: #e0e0f0;
}
</style>