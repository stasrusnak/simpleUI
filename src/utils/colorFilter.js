export function getFilterByColor(color) {
  switch (color) {
    case 'red':
      return 'brightness(0) saturate(100%) invert(23%) sepia(77%) saturate(6990%) hue-rotate(356deg) brightness(94%) contrast(125%)';
    case 'white':
      return 'invert(100%)';
    case 'orange':
      return 'brightness(0) saturate(100%) invert(42%) sepia(43%) saturate(2884%) hue-rotate(1deg) brightness(102%) contrast(105%)';
    case 'yellow':
      return 'brightness(0) saturate(100%) invert(91%) sepia(38%) saturate(1210%) hue-rotate(1deg) brightness(103%) contrast(102%)';
   case 'green':
      return 'brightness(0) saturate(100%) invert(40%) sepia(79%) saturate(2211%) hue-rotate(89deg) brightness(103%) contrast(100%)';
    case 'teal':
      return 'brightness(0) saturate(100%) invert(32%) sepia(99%) saturate(557%) hue-rotate(136deg) brightness(99%) contrast(101%)';
    case 'blue':
      return 'brightness(0) saturate(100%) invert(54%) sepia(51%) saturate(6400%) hue-rotate(183deg) brightness(102%) contrast(101%)';
    case 'violet':
      return 'brightness(0) saturate(100%) invert(52%) sepia(35%) saturate(7497%) hue-rotate(271deg) brightness(89%) contrast(103%)'; // Для фиолетового
    case 'purple':
      return 'brightness(0) saturate(100%) invert(17%) sepia(55%) saturate(4810%) hue-rotate(288deg) brightness(74%) contrast(132%)'; // Для пурпурного
    case 'pink':
      return 'brightness(0) saturate(100%) invert(92%) sepia(8%) saturate(4968%) hue-rotate(224deg) brightness(118%) contrast(101%)'; // Для розового
    case 'brown':
      return 'brightness(0) saturate(100%) invert(21%) sepia(97%) saturate(2143%) hue-rotate(346deg) brightness(76%) contrast(83%)'; // Для коричневого
    case 'grey':
      return 'brightness(0) saturate(100%) invert(52%) sepia(2%) saturate(8%) hue-rotate(14deg) brightness(96%) contrast(84%)'; // Для серого
    case 'black':
      return 'invert(1%)'; // Для черного
    default:
      return ''; // По умолчанию ничего не возвращать
  }
}
