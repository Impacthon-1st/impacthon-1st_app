declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

import 'styled-components/native';
import Palette from '@theme/types/Palette';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Palette {}
}
