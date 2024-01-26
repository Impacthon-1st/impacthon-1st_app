import Palette from '@theme/types/Palette';
import {orange, red, blue, green, yellow} from '@theme/colors';

const dark: Palette = {
  gray: {
    body: '#F5F5F5',
    subBody: '#CDCDD6',
    disabled: '#B3B3C1',
    subSolid: '#1C1C22',
    solid: '#17171C',
    background: '#0E0F10',
  },
  primary: {
    default: '#2B5FFD',
    active: '#0234CA',
  },
  secondary: {
    default: '#F2F4F6',
    active: '#BDC7D1',
  },
  red: red.dark,
  orange: orange.dark,
  yellow: yellow.dark,
  green: green.dark,
  blue: blue.dark,
};

export default dark;
