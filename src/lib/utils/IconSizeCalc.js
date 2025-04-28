export function getSize(size) {
  switch (size) {
    case 'mini':
      return '10px';
    case 'tiny':
      return '17px';
    case 'small':
      return '25px';
    case 'large':
      return '35px';
   case 'big':
      return '45px';
    case 'huge':
      return '65px';
    case 'massive':
      return '85px';
    default:
      return '30px';
  }
}
