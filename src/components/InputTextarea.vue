<script >
export default {
  name: 'InputTextareaSimpleUI',
  data() {
    return {
      text: ''
    };
  }
}
</script>

<template>
  <textarea class="input-textarea" v-model="text"></textarea>
</template>


<style scoped>

.input-textarea {
  outline: none;
  box-shadow: 0 0 25px #1d77a8;
  border-radius: 5px;
  padding: 10px;
  font-family: DejaVu Sans, sans-serif;
  transition: border-color 0.3s;
  box-sizing: border-box;
  width: 300px;
  height: 150px;
}

.input-textarea:focus {
  outline: none;
  box-shadow: 0 0 25px #ff00a1;
  border: none;
}

.input-textarea:focus {
  animation: scale 0.3s ease-out;
}


@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.input-textarea {
  background-color: #fff;
  color: #495057;
}

.input-textarea:focus {
  background-color: rgba(245, 210, 243, 0.98);
}
</style>
