import Palette from '@theme/types/Palette';
import {orange, red, blue, green, yellow} from '@theme/colors';

const light: Palette = {
  gray: {
    body: '#18191B',
    subBody: '#373743',
    disabled: '#4E4E5F',
    subSolid: '#E0E0E6',
    solid: '#F2F4F6',
    background: '#FFFFFF',
  },
  primary: {
    default: '#F3483F',
    active: '#F56D66',
    disabled: '#F56D66',
  },
  secondary: {
    default: '#F2F4F6',
    active: '#F9FAFA',
  },
  red: red.light,
  orange: orange.light,
  yellow: yellow.light,
  green: green.light,
  blue: blue.light,
};

export default light;
