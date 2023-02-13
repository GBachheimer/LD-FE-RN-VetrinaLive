import colors from 'src/constants/colors';

export const selectColor = (state: string | undefined) => {
  let color = '';
  switch (state) {
    case 'Shipped':
      color = colors.light.purple;
      break;
    case 'New':
      color = colors.light.blue;
      break;
    case 'Return made':
      color = colors.light.weirdPurple;
      break;
    case 'Cancelled':
      color = colors.light.red;
      break;
    case 'In progress':
      color = colors.light.orange;
      break;
    default:
      color = colors.light.white;
  }
  return color;
};
