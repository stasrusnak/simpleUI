<template>
  <div>
    <nav>
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }">
            {{ section.name }}
          </a>
        </li>
      </ul>
    </nav>
    <div ref="scrollContainer" class="scroll-container">
      <section v-for="section in sections" :key="section.id" :id="section.id">
        <h2>{{ section.name }}</h2>
        <p>{{ section.content }}</p>
      </section>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const loerm1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat iste mollitia ea nobis debitis, assumenda, nisi labore repudiandae praesentium aliquid modi ratione aperiam ipsa tenetur minus aliquam magni amet.'+
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem neque perspiciatis magnam doloribus! Obcaecati ipsam accusantium aperiam possimus consequuntur corrupti itaque, nesciunt totam magni tenetur dolore fugiat minus ab velit.'+
'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum amet perspiciatis ad laborum! Atque nemo aspernatur nihil dolorem ab, totam pariatur aut, distinctio provident tenetur repellat sint odio quaerat'+
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ratione ad ducimus sed natus nobis consequuntur blanditiis totam pariatur quo expedita, tenetur nam a iure, quisquam quas neque fugit veniam.'
 
    const sections = [
      { id: 'section1', name: 'Section 1', content: loerm1 },
      { id: 'section2', name: 'Section 2', content: loerm1 },
      { id: 'section3', name: 'Section 3', content:loerm1 },
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
      threshold: 0.5, // adjust threshold as needed
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

<style>
.scroll-container {
  height: 400px;
  overflow-y: auto;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li a {
  text-decoration: none;
  padding: 10px;
  display: block;
}

nav li a.active {
  font-weight: bold;
  color: red;
}
</style>

