<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import {isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref, computed} from 'vue'
import SimpleUiTableBase from '@/components/table/SimpleUiTableBase.vue'
import SimpleUiTableRow from '@/components/table/SimpleUiTableRow.vue'
import SimpleUiTableColumn from '@/components/table/SimpleUiTableColumn.vue'
const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const isButtonShow = ref(false)
const sortField = ref('id')
const typeSort = ref('asc')

// bg: '#00C48C'
const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
    bg: ''
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: ''
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',

  }
])

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>


<template>
  <div class="contentBlock">
    <h1>Table</h1>
    <h2>A table displays a collections of data grouped into rows.</h2>
    <div class="description">
      <p>A table displays a collections of data grouped into rows.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line line_body">

      <div>
        <span>Sort Field: {{ sortField }}</span>
        <span>Type Sort: {{ typeSort }}</span>
      </div>
      <div>
        <SimpleUiTableBase
            color="primary"
            textColor="white"
            :head="tableHeads"
            :columnTemplates="tableSizeColumns"
            @sorting="setSort">
          <SimpleUiTableRow
              v-for="book in booksSorting"
              :key="book.id"
              :columnTemplates="tableSizeColumns"
              :bgRow="book.bg">
            <SimpleUiTableColumn :columnTitle="tableHeads[0]">
              {{ book.id }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[1]">
              {{ book.author }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[2]">
              {{ book.title }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :image="true" :srcImage="book.image"/>
            <SimpleUiTableColumn>
              <SimpleUiButton buttonText="Read Online"></SimpleUiButton>
            </SimpleUiTableColumn>
          </SimpleUiTableRow>
        </SimpleUiTableBase>
      </div>


    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>


</template>

<style scoped lang="scss">

.line_body {
 display: flex;
  flex-direction: column;
}

.progress {
  min-width: 300px;
  padding-bottom: 1rem;
}

.description {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    line-height: 1.5;
  }
}

.code_button {
  display: flex;
  margin-bottom: 1px;
}

.contentBlock {
  padding-bottom: 1px;
}

p {
  font-size: 18px;
  padding-bottom: 15px;
}

.body-icon-example {
  display: flex;
}

.item-example {
  min-width: 350px;
  flex-direction: column;

  padding-right: 20px;
}

.nav {
  /*фикс маленький отспутов кнопок навигации */
  :deep(.tab-nav) {
    margin-right: -10px;
  }
}
</style>
