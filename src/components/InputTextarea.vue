<script >
export default {
  name: 'InputTextareaSimpleUI',
  data() {
    return {
      text: '' // Переменная, в которой будет храниться текст из textarea
    };
  }
}
</script>

<template>
  <textarea class="input-textarea" v-model="text"></textarea>
</template>


<style scoped>
/* Стили для текстового поля */
.input-textarea {
  outline: none; /* Убираем стандартный фокусовый контур */
  box-shadow: 0 0 25px #1d77a8; /* Тень при фокусе */
  border-radius: 5px; /* Радиус закругления углов */
  padding: 10px; /* Отступ внутри textarea */
  font-family: DejaVu Sans, sans-serif; /* Шрифт текста */
  transition: border-color 0.3s; /* Плавное изменение цвета рамки при фокусе */
  box-sizing: border-box; /* Учитываем рамку внутри размеров textarea */
  /* Дополнительные стили, которые могут понадобиться вам */
  /* Например, установка высоты и ширины textarea */
  width: 300px;
  height: 150px;
}
/* Стили для текстового поля при фокусе */
.input-textarea:focus {
  outline: none; /* Убираем стандартный фокусовый контур */
  box-shadow: 0 0 25px #ff00a1; /* Тень при фокусе */
  border: none;
}

/* Анимация при вводе текста */
/* Здесь можно использовать любые CSS-анимации */
.input-textarea:focus {
  animation: scale 0.3s ease-out; /* Пример анимации */
}

/* Ключевые кадры анимации */
@keyframes scale {
  0% {
    transform: scale(1); /* Начальный масштаб */
  }
  50% {
    transform: scale(1.05); /* Увеличение масштаба в середине анимации */
  }
  100% {
    transform: scale(1); /* Возврат к начальному масштабу */
  }
}

/* Пример других вариантов окраски */
.input-textarea {
  background-color: #fff; /* Цвет фона */
  color: #495057; /* Цвет текста */
}

.input-textarea:focus {
  background-color: rgba(245, 210, 243, 0.98); /* Изменение цвета фона при фокусе */
}
</style>
