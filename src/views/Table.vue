<script setup>
import SimpleUiButton from "@/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/components/SimpleUiIcon.vue";
import {isExampleButton} from "@/utils/listOfTemplateExample.js";
import {ref, computed} from 'vue'
import SimpleUiTableBase from '@/components/table/SimpleUiTableBase.vue'
import SimpleUiTableRow from '@/components/table/SimpleUiTableRow.vue'
import SimpleUiTableColumn from '@/components/table/SimpleUiTableColumn.vue'
import moviesList from "@/utils/moviesList.js";
import SimpleUiInput from "@/components/SimpleUiInput.vue";



const tableHeads = ['Id', 'Year', 'Rating', 'Director', 'Title', 'Description', 'Cover', ' ']
const tableSizeColumns = '2.5% 5% 5% 12.5% 17.5% 32.5% 10% 10%'

const searchQuery = ref('')

const isButtonShow = ref(false)
const sortField = ref('id')
const typeSort = ref('asc')
const movies =  ref(moviesList)

const filteredAndSorted = computed(() => {
  // Фильтруем фильмы
  const filtered = movies.value.filter(movie =>
      Object.values(movie).some(value =>
          String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
  );

  return filtered.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
});

const openLink = (link) => {
  window.open(link, '_blank');
};
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
    <div class="description">
      <p>A table displays a collections of data grouped into rows.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line line_body">
      <div class="line line_body">
        <span>Sort Field: {{ sortField }}</span>
        <span>Type Sort: {{ typeSort }}</span>
        <span>searchPattern: {{ searchQuery }}</span>
      </div>
      <div class="line line_body search">
        <SimpleUiInput
            name="icons"
            placeholder="Enter search text... "
            label="Search Query"
            v-model:value="searchQuery"
        >
          <template #prepend>
            <SimpleUiIcon icon="search" size="small"></SimpleUiIcon>
          </template>
          <template #append>
            <div class="button-clear" @click="searchQuery=''">
              <b>Clear</b>
              <SimpleUiIcon icon="trash" size="small"></SimpleUiIcon>
            </div>
          </template>
        </SimpleUiInput>
      </div>
      <div>
        <SimpleUiTableBase

            color="minimal-dark-hover"
            textColor="white"
            :head="tableHeads"
            :columnTemplates="tableSizeColumns"
            @sorting="setSort">
          <SimpleUiTableRow
              v-for="move in filteredAndSorted"
              :key="move.id"
              :columnTemplates="tableSizeColumns"
              :bgRow="move.bg">
            <SimpleUiTableColumn :columnTitle="tableHeads[0]">
              {{ move.id }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[1]">
              {{ move.year }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[2]">
              {{ move.rating }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[3]">
              {{ move.director }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[4]">
              {{ move.title }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :columnTitle="tableHeads[5]">
              {{ move.description }}
            </SimpleUiTableColumn>
            <SimpleUiTableColumn :image="true" :srcImage="move.image"/>
            <SimpleUiTableColumn>
              <SimpleUiButton buttonText="Read Online" color="basic" @click="openLink(move.link)"></SimpleUiButton>
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

.search{
  padding-top: 10px;
  display: flex;
}
.button-clear{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.link_button{
  color: var(--primary);
  background: rgba(105, 121, 248, 0);
  border: 1px solid var(--primary);
}

.line_body {
 display: flex;
 flex-direction: column;
  padding-bottom: 5px;
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

:deep(.table-column-image){
  height: 50px;
}
:deep(.btn_basic){
  min-width: auto;
  font-size: 13px;
}
:deep(.input-text){
  padding: 0;
}
:deep(.table_content){
  max-height: 405px;
  overflow-y: auto;
  overflow-x: hidden;
}
@media screen and (max-width: 1600px) {
  :deep(.table-row) {
    grid-template-columns: 2.5% 5% 5% 12.5% 17.5% 30.5% 5% 10% !important;
  }
}
</style>
