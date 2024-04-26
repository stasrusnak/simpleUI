export function getFilterByColor(color) {
  switch (color) {
    case 'red':
      return 'brightness(0) saturate(100%)';
    case 'white':
      return 'invert(100%)'; // Для красного
    case 'orange':
      return 'brightness(0) saturate(100%) invert(42%) sepia(43%) saturate(2884%) hue-rotate(1deg) brightness(102%) contrast(105%);'; // Для оранжевого
    case 'yellow':
      return 'brightness(0) saturate(100%) invert(91%) sepia(38%) saturate(1210%) hue-rotate(1deg) brightness(103%) contrast(102%);'; // Для желтого
    case 'olive':
      return 'invert(100%)'; // Для оливкового
    case 'green':
      return 'invert(100%)'; // Для зеленого
    case 'teal':
      return 'invert(100%)'; // Для бирюзового
    case 'blue':
      return 'invert(100%)'; // Для синего
    case 'violet':
      return 'invert(100%)'; // Для фиолетового
    case 'purple':
      return 'invert(100%)'; // Для пурпурного
    case 'pink':
      return 'invert(100%)'; // Для розового
    case 'brown':
      return 'invert(100%)'; // Для коричневого
    case 'grey':
      return 'invert(100%)'; // Для серого
    case 'black':
      return 'invert(100%)'; // Для черного
    default:
      return ''; // По умолчанию ничего не возвращать
  }
}
