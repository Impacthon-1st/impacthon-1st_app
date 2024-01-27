declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

import Palette from '@theme/types/Palette';
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: Palette;
  }
}
