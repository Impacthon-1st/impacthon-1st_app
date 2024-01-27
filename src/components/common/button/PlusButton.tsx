import React from 'react';
import {SvgXml} from 'react-native-svg';
import styled, {useTheme} from 'styled-components/native';
import {Pressable} from '@components/custom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PlusButton = () => {
  const {colors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  return (
    <StyledPressable
      style={[
        {
          bottom: bottom + 80,
        },
      ]}
      color={{
        active: colors.primary.active,
        default: colors.primary.default,
        disabled: '',
      }}>
      <SvgXml
        xml={`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_156_2180" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_156_2180)">
              <path d="M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57188 12.3904 5.5 12.2122 5.5 11.9997C5.5 11.7871 5.57188 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25C11.25 6.0375 11.3219 5.85938 11.4657 5.71563C11.6095 5.57188 11.7877 5.5 12.0003 5.5C12.2129 5.5 12.391 5.57188 12.5346 5.71563C12.6782 5.85938 12.7499 6.0375 12.7499 6.25V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.678 18.1406 12.5342 18.2843C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.7871 18.5 11.609 18.4281 11.4654 18.2843C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z" fill="white"/>
            </g>
          </svg>
        `}
      />
    </StyledPressable>
  );
};

export default PlusButton;

const StyledPressable = styled(Pressable)`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
`;
