export function getSize(size) {
  switch (size) {
    case 'mini':
      return '5px';
    case 'tiny':
      return '15px';
    case 'small':
      return '25px';
    case 'large':
      return '35px';
   case 'big':
      return '45px';
    case 'huge':
      return '65px';
    case 'massive':
      return '75px';
    default:
      return '30px';
  }
}
