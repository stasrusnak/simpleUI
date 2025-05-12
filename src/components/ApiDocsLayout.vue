<script setup>
import { ref, computed } from 'vue';
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import SimpleUiTabs from "@/lib/components/SimpleUiTabs.vue";
import SimpleUiTable from "@/lib/components/table/SimpleUiTable.vue";
import SimpleUiTableRow from "@/lib/components/table/SimpleUiTableRow.vue";
import SimpleUiTableColumn from "@/lib/components/table/SimpleUiTableColumn.vue";

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
const activeTab = ref('props');

// Вкладки документации
const tabs = [
  { name: 'props', label: 'Props', selected: true },
  { name: 'events', label: 'Events' },
  { name: 'slots', label: 'Slots' },
];

// Заголовки таблиц
const propsTableHeads = ['Name', 'Type', 'Default', 'Description'];
const eventsTableHeads = ['Name', 'Parameters', 'Description'];
const slotsTableHeads = ['Name', 'Description'];

// Шаблоны колонок
// const tableSizeColumns = '25% 15% 15% 45%';
const tableSizeColumns = '1.5fr 1fr 1.5fr 3fr';

// Функция копирования импорта
const copyImport = () => {
  navigator.clipboard.writeText(props.importCode);
};
</script>

<template>
  <div class="page-container">
    <div class="api-docs-section">
      <div class="api-docs-header">
        <h2>API Reference</h2>
        <SimpleUiButton buttonText="Copy Import" color="minimal_dark" size="small" @click="copyImport">
          <SimpleUiIcon icon="copy" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>

      <SimpleUiTabs
          :names="tabs"
          color="primary"
          minimal
      >
        <template v-slot:props-icon>
          <SimpleUiIcon icon="settings" size="tiny" ></SimpleUiIcon>
        </template>
        <template v-slot:props>
          <SimpleUiTable
              headColor="minimal-dark"
              color="transparent"
              textColor="white"
              :head="propsTableHeads"
              :columnTemplates="tableSizeColumns"
          >
            <SimpleUiTableRow
                bg-row="transparent"
                v-for="prop in componentProps"
                :key="prop.name"
                :columnTemplates="tableSizeColumns"
            >
              <SimpleUiTableColumn :columnTitle="propsTableHeads[0]">
                <code class="smpl-code">{{ prop.name }}</code>
                <span v-if="prop.required" class="required-badge">required</span>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="propsTableHeads[1]">
                <code class="smpl-code">{{ prop.type }}</code>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="propsTableHeads[2]">
                <code class="smpl-code" v-if="prop.default !== undefined">{{ prop.default }}</code>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="propsTableHeads[3]">
                {{ prop.description }}
              </SimpleUiTableColumn>
            </SimpleUiTableRow>
          </SimpleUiTable>
        </template>

        <template v-slot:events-icon>
          <SimpleUiIcon icon="sync" size="tiny" ></SimpleUiIcon>
        </template>
        <template v-slot:events>
          <SimpleUiTable
              color="transparent"
              textColor="white"
              :head="eventsTableHeads"
              :columnTemplates="tableSizeColumns"
          >
            <SimpleUiTableRow
                bg-row="transparent"
                v-for="event in componentEvents"
                :key="event.name"
                :columnTemplates="tableSizeColumns"
            >
              <SimpleUiTableColumn :columnTitle="eventsTableHeads[0]">
                <code class="smpl-code">{{ event.name }}</code>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="eventsTableHeads[1]">
                <code class="smpl-code" v-if="event.params">{{ event.params }}</code>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="eventsTableHeads[2]">
                {{ event.description }}
              </SimpleUiTableColumn>
            </SimpleUiTableRow>
          </SimpleUiTable>
        </template>
        <template v-slot:slots-icon>
          <SimpleUiIcon icon="code" size="tiny" ></SimpleUiIcon>
        </template>
        <template v-slot:slots>
          <SimpleUiTable
              color="transparent"
              textColor="white"
              :head="slotsTableHeads"
              :columnTemplates="tableSizeColumns"
          >
            <SimpleUiTableRow
                bg-row="transparent"
                v-for="slot in componentSlots"
                :key="slot.name"
                :columnTemplates="tableSizeColumns"
            >
              <SimpleUiTableColumn :columnTitle="slotsTableHeads[0]">
                <code>{{ slot.name }}</code>
              </SimpleUiTableColumn>
              <SimpleUiTableColumn :columnTitle="slotsTableHeads[1]">
                {{ slot.description }}
              </SimpleUiTableColumn>
            </SimpleUiTableRow>
          </SimpleUiTable>
        </template>
      </SimpleUiTabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
}

.api-docs-section {
  border-radius: 0.5rem;
  padding: 20px;
  overflow-y: auto;
  min-height: 500px;
}

.api-docs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #ffffff;
  }
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

@media (max-width: 1200px) {
  .page-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .api-docs-section {
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }
}

:deep(.smpl-tabs-content),:deep(.smpl-tabs-nav){
  padding: 0;
}



</style>