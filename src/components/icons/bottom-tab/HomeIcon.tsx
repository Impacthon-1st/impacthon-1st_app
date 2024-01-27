import React from 'react';
import {SvgXml} from 'react-native-svg';
import SelectedProps from '@components/icons/types/SelectedProps.ts';
import {useTheme} from 'styled-components/native';

const HomeIcon = ({selected}: SelectedProps) => {
  const {colors} = useTheme();
  return (
    <SvgXml
      xml={`
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.29999 11.4522V16.8002C4.29999 17.9203 4.29999 18.4807 4.51797 18.9086C4.70972 19.2849 5.01546 19.5906 5.39178 19.7823C5.81919 20.0001 6.37898 20.0001 7.4969 20.0001H17.1031C18.221 20.0001 18.78 20.0001 19.2074 19.7823C19.5837 19.5906 19.8905 19.2849 20.0822 18.9086C20.3 18.4811 20.3 17.9216 20.3 16.8037V11.4522C20.3 10.9179 20.2995 10.6506 20.2346 10.4019C20.177 10.1816 20.0825 9.97307 19.9546 9.78464C19.8102 9.57201 19.6095 9.39569 19.2074 9.04383L14.4074 4.84383C13.6608 4.19054 13.2875 3.86406 12.8674 3.73982C12.4972 3.63035 12.1026 3.63035 11.7324 3.73982C11.3126 3.86397 10.9398 4.19014 10.1944 4.84244L5.39276 9.04383C4.99063 9.39569 4.79003 9.57201 4.64569 9.78464C4.51778 9.97307 4.42254 10.1816 4.36496 10.4019C4.29999 10.6506 4.29999 10.9179 4.29999 11.4522Z" fill="${
            selected ? colors.gray.body : 'none'
          }" stroke="${
        selected ? colors.gray.body : colors.gray.disabled
      }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.29999 17H15.3" stroke="${
            selected ? colors.gray.solid : colors.gray.disabled
          }" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `}
    />
  );
};

export default HomeIcon;
