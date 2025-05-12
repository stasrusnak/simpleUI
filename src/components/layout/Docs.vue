<script setup>
import ApiDocsLayout from '@/components/ApiDocsLayout.vue';
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
const importCode = `import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";`;

const iconProps = [
  {
    name: 'icon',
    type: 'String',
    default: 'home',
    required: true,
    description: 'Name of the icon to display'
  },
  {
    name: 'size',
    type: 'String',
    default: 'small',
    description: 'Size of the icon (mini, tiny, small, large, big, huge, massive)'
  },
  {
    name: 'color',
    type: 'String',
    default: 'currentColor',
    description: 'Color of the icon. Can be any valid CSS color'
  },
  {
    name: 'stroke',
    type: 'Number',
    default: '2',
    description: 'Stroke width of the icon'
  },
  {
    name: 'rotate',
    type: 'Number',
    default: '0',
    description: 'Rotation angle in degrees'
  }
];

// События компонента
const iconEvents = [
  {
    name: 'click',
    params: 'Event',
    description: 'Emitted when the icon is clicked'
  }
];

// Слоты компонента
const iconSlots = [
  {
    name: 'default',
    description: 'Content to display inside the icon container (rarely used)'
  }
];



// Код демонстрации компонента
const demoCode = `<template>
  <div class="icons-showcase">
    <!-- Основные иконки -->
    <div class="icons-row">
      <SimpleUiIcon icon="home" />
      <SimpleUiIcon icon="menu" />
      <SimpleUiIcon icon="alert-circle" />
      <SimpleUiIcon icon="search" />
      <SimpleUiIcon icon="calendar" />
    </div>

    <!-- Размеры иконок -->
    <div class="size-examples">
      <SimpleUiIcon icon="home" size="mini" />
      <SimpleUiIcon icon="home" size="tiny" />
      <SimpleUiIcon icon="home" size="small" />
      <SimpleUiIcon icon="home" size="large" />
      <SimpleUiIcon icon="home" size="big" />
      <SimpleUiIcon icon="home" size="huge" />
      <SimpleUiIcon icon="home" size="massive" />
    </div>
  </div>
</template>`;
</script>


<template>

  <ApiDocsLayout
      componentTitle="Icon Set"
      componentDescription="A collection of free open source icons for your UI projects."
      :importCode="importCode"
      :componentProps="iconProps"
      :componentEvents="iconEvents"
      :componentSlots="iconSlots"
      :demoCode="demoCode"
  >
    <template #demo>
      <!-- Демонстрация иконок (текущий контент) -->
      <div class="icons-showcase">
        <div class="info-line">SimpleUI includes free open source icons <span class="accent">lucicons</span></div>

        <!-- Первый ряд иконок -->
        <div class="icons-row">
          <div class="icon-item">
            <SimpleUiIcon icon="home" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="menu" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="alert-circle" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="search" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="calendar" />
          </div>
        </div>

        <!-- Второй ряд иконок -->
        <div class="icons-row">
          <div class="icon-item">
            <SimpleUiIcon icon="camera" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="clock" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="message-circle" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="check-circle" />
          </div>
          <div class="icon-item">
            <SimpleUiIcon icon="file" />
          </div>
        </div>

        <!-- Размеры иконок -->
        <div class="sizes-section">
          <h3>Size</h3>
          <div class="info-line">An icon can vary in size</div>

          <div class="size-examples">
            <div class="size-item">
              <div class="size-label">mini</div>
              <SimpleUiIcon icon="home" size="mini" />
            </div>
            <div class="size-item">
              <div class="size-label">tiny</div>
              <SimpleUiIcon icon="home" size="tiny" />
            </div>
            <div class="size-item">
              <div class="size-label">small</div>
              <SimpleUiIcon icon="home" size="small" />
            </div>
            <div class="size-item">
              <div class="size-label">large</div>
              <SimpleUiIcon icon="home" size="large" />
            </div>
            <div class="size-item">
              <div class="size-label">big</div>
              <SimpleUiIcon icon="home" size="big" />
            </div>
            <div class="size-item">
              <div class="size-label">huge</div>
              <SimpleUiIcon icon="home" size="huge" />
            </div>
            <div class="size-item">
              <div class="size-label">massive</div>
              <SimpleUiIcon icon="home" size="massive" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </ApiDocsLayout>

</template>

<style scoped lang="scss">


.icons-showcase {
  padding: 10px 0;
}

.info-line {
  font-size: 16px;
  margin-bottom: 1.5rem;
  color: #a0a0c0;

  .accent {
    color: var(--smpl-ui-primary, #6979f8);
  }
}

.icons-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #242436;
}

.sizes-section {
  margin-top: 2rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 20px;
  }
}

.size-examples {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  margin-top: 1rem;
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  .size-label {
    font-size: 12px;
    color: #a0a0c0;
    margin-bottom: 0.5rem;
  }
}

</style>