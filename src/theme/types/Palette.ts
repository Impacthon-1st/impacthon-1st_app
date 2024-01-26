import Color from './Color';

interface Palette {
  gray: {
    body: string;
    subBody: string;
    disabled: string;
    subSolid: string;
    solid: string;
    background: string;
  };
  primary: {
    default: string;
    active: string;
  };
  secondary: {
    default: string;
    active: string;
  };
  red: Color;
  orange: Color;
  yellow: Color;
  green: Color;
  blue: Color;
}

export default Palette;
