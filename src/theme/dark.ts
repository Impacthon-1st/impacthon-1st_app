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
    default: '#F3483F',
    active: '#F56D66',
    disabled: '#FCD1CF',
  },
  secondary: {
    default: '#080A0C',
    active: '#202027',
  },
  red: red.dark,
  orange: orange.dark,
  yellow: yellow.dark,
  green: green.dark,
  blue: blue.dark,
};

export default dark;
