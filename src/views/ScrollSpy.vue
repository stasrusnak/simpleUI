<template>
  <div class="scroll_content">

    <div ref="scrollContainer" class="scroll_container">
      <section v-for="section in sections" :key="section.id" :id="section.id" class="content_section">
        <h2>{{ section.name }}</h2>
        <p>{{ section.content }}</p>
      </section>
    </div>

    <nav class="nav_body">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <div class="nav_section">
            <div class="rounded_rectangle" :style="activeSection === section.id ? 'opacity: 1' : ''"></div>
            <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }">
              {{ section.name }}
            </a>
          </div>
        </li>
      </ul>
    </nav>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const loerm1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat iste mollitia ea nobis debitis, assumenda, nisi labore repudiandae praesentium aliquid modi ratione aperiam ipsa tenetur minus aliquam magni amet.' +
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem neque perspiciatis magnam doloribus! Obcaecati ipsam accusantium aperiam possimus consequuntur corrupti itaque, nesciunt totam magni tenetur dolore fugiat minus ab velit.' +
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum amet perspiciatis ad laborum! Atque nemo aspernatur nihil dolorem ab, totam pariatur aut, distinctio provident tenetur repellat sint odio quaerat' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ratione ad ducimus sed natus nobis consequuntur blanditiis totam pariatur quo expedita, tenetur nam a iure, quisquam quas neque fugit veniam.'

const sections = [
  { id: 'section1', name: 'Section 1', content: loerm1 },
  { id: 'section2', name: 'Section 2', content: loerm1 },
  { id: 'section3', name: 'Section 3', content: loerm1 },
];

const activeSection = ref(null);
const scrollContainer = ref(null);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
}, {
  root: scrollContainer.value,
  threshold: 1,  
});

onMounted(() => {
  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });
});

onUnmounted(() => {
  observer.disconnect();
});


</script>

<style type="scss" scoped>
.scroll_content {
  display: flex;

}

.content_section {
  height: 400px;
}

.nav_body {
  position: sticky;
  display: block;
  top: 100px;
  height: 100%;
  text-wrap: nowrap;


}
 

nav ul {
  list-style: none;
  padding: 0;
}

nav li a {
  text-decoration: none;
  padding: 10px;
  display: block;
  text-wrap: nowrap;
  content: "";
  opacity: 0.6;

}

.nav_section {
  display: flex;
  text-align: center;
  align-items: center;
}

.rounded_rectangle {
  opacity: 0;
  width: 4px;
  height: 20px;
  background-color: #4CAF50;
  /* background-color: var(--smpl-ui-danger-hover); */
  border-radius: 2px;
}

nav li a.active {
  font-weight: bold;
  color:var(--smpl-ui-danger);
  opacity: 1; 
  transition:  transform 0.25s;
  transform:   scale(1.1); 
}
</style>
