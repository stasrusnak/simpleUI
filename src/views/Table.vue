<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import {isExampleButton} from "@/lib/utils/listOfTemplateExample.js";
import {ref, computed} from 'vue'
import SimpleUiTable from '@/lib/components/table/SimpleUiTable.vue'
import SimpleUiTableRow from '@/lib/components/table/SimpleUiTableRow.vue'
import SimpleUiTableColumn from '@/lib/components/table/SimpleUiTableColumn.vue'
import moviesList from "@/lib/utils/moviesList.js";
import SimpleUiInput from "@/lib/components/SimpleUiInput.vue";



const tableHeads = ['Id', 'Year', 'Rating', 'Director', 'Title', 'Description', 'Cover', ' ']
const tableSizeColumns = '2.5% 5% 5% 12.5% 17.5% 32.5% 1fr 1fr'

const searchQuery = ref('')

const isButtonShow = ref(false)
const sortField = ref('id')
const sortType = ref('asc')
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
    if (sortType.value === 'desc') modifier = -1
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
    if (sortType.value === 'asc') {
      sortType.value = 'desc'
    } else {
      sortType.value = 'asc'
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
        <span>Type Sort: {{ sortType }}</span>
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
        <SimpleUiTable
            color="minimal-dark"
            textColor="white"
            :head="tableHeads"
            :columnTemplates="tableSizeColumns"
            :sortField = "sortField"
            :sortType = "sortType"
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
        </SimpleUiTable>
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
  color: var(--smpl-ui-primary);
  background: rgba(105, 121, 248, 0);
  border: 1px solid var(--smpl-ui-primary);
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

:deep(.smpl-table-column-image){
  height: 50px;
}
:deep(.smpl-btn_basic){
  min-width: auto;
  font-size: 13px;
}
:deep(.smpl-input-text){
  padding: 0;
}
:deep(.smpl-table_content){
  max-height: 405px;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>
