import React from 'react';
import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';
import {View} from 'react-native';

const CustomMarker = ({url}: {url?: string}) => {
  return (
    <View>
      <ImageContainer source={{uri: url}} />
      <SvgXml
        xml={`
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_267_1349" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <rect width="64" height="64" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_267_1349)">
            <path d="M32.0001 32.0004C33.4667 32.0004 34.7223 31.4782 35.7667 30.4337C36.8112 29.3893 37.3334 28.1337 37.3334 26.6671C37.3334 25.2004 36.8112 23.9449 35.7667 22.9004C34.7223 21.856 33.4667 21.3337 32.0001 21.3337C30.5334 21.3337 29.2779 21.856 28.2334 22.9004C27.189 23.9449 26.6667 25.2004 26.6667 26.6671C26.6667 28.1337 27.189 29.3893 28.2334 30.4337C29.2779 31.4782 30.5334 32.0004 32.0001 32.0004ZM32.0001 58.6671C24.8445 52.5782 19.5001 46.9226 15.9667 41.7004C12.4334 36.4782 10.6667 31.6449 10.6667 27.2004C10.6667 20.5337 12.8112 15.2226 17.1001 11.2671C21.389 7.31152 26.3556 5.33374 32.0001 5.33374C37.6445 5.33374 42.6112 7.31152 46.9001 11.2671C51.189 15.2226 53.3334 20.5337 53.3334 27.2004C53.3334 31.6449 51.5667 36.4782 48.0334 41.7004C44.5001 46.9226 39.1556 52.5782 32.0001 58.6671Z" fill="#F3483F"/>
          </g>
        </svg>
      `}
      />
    </View>
  );
};

const ImageContainer = styled.Image`
  position: absolute;
  z-index: 100;
  left: 16px;
  top: 12px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: transparent;
`;

export default CustomMarker;
