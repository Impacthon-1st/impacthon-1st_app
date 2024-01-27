import React from 'react';
import SelectedProps from '@components/icons/types/SelectedProps.ts';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

const TripIcon = ({selected}: SelectedProps) => {
  const {colors} = useTheme();
  return (
    <SvgXml
      xml={
        selected
          ? `
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_146_1984" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <rect x="0.75" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_146_1984)">
            <path d="M18.25 20.5V6.50001H20.4423C20.9474 6.50001 21.375 6.67501 21.725 7.02501C22.075 7.37501 22.25 7.80258 22.25 8.30771V18.6923C22.25 19.1974 22.075 19.625 21.725 19.975C21.375 20.325 20.9474 20.5 20.4423 20.5H18.25ZM10.75 6.50001H14.75V4.80774C14.75 4.7308 14.718 4.66029 14.6539 4.59619C14.5897 4.53207 14.5192 4.50001 14.4423 4.50001H11.0577C10.9808 4.50001 10.9103 4.53207 10.8462 4.59619C10.7821 4.66029 10.75 4.7308 10.75 4.80774V6.50001ZM8.75001 20.5V6.50001H9.25003V4.80774C9.25003 4.30262 9.42503 3.87506 9.77503 3.52506C10.125 3.17506 10.5526 3.00006 11.0577 3.00006H14.4423C14.9474 3.00006 15.375 3.17506 15.725 3.52506C16.075 3.87506 16.25 4.30262 16.25 4.80774V6.50001H16.75V20.5H8.75001ZM5.05773 20.5C4.5526 20.5 4.12503 20.325 3.77503 19.975C3.42503 19.625 3.25003 19.1974 3.25003 18.6923V8.30771C3.25003 7.80258 3.42503 7.37501 3.77503 7.02501C4.12503 6.67501 4.5526 6.50001 5.05773 6.50001H7.25003V20.5H5.05773Z" fill="${colors.gray.body}"/>
          </g>
        </svg>`
          : `
         <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_146_1990" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <rect x="0.75" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_146_1990)">
            <path d="M5.05773 20.5C4.55901 20.5 4.13306 20.3234 3.77986 19.9701C3.42664 19.6169 3.25003 19.191 3.25003 18.6923V8.30771C3.25003 7.809 3.42664 7.38304 3.77986 7.02984C4.13306 6.67662 4.55901 6.50001 5.05773 6.50001H9.25003V4.80774C9.25003 4.30902 9.42664 3.88306 9.77986 3.52986C10.1331 3.17666 10.559 3.00006 11.0577 3.00006H14.4423C14.941 3.00006 15.367 3.17666 15.7202 3.52986C16.0734 3.88306 16.25 4.30902 16.25 4.80774V6.50001H20.4423C20.941 6.50001 21.367 6.67662 21.7202 7.02984C22.0734 7.38304 22.25 7.809 22.25 8.30771V18.6923C22.25 19.191 22.0734 19.6169 21.7202 19.9701C21.367 20.3234 20.941 20.5 20.4423 20.5H5.05773ZM10.75 6.50001H14.75V4.80774C14.75 4.7308 14.718 4.66029 14.6539 4.59619C14.5897 4.53207 14.5192 4.50001 14.4423 4.50001H11.0577C10.9808 4.50001 10.9103 4.53207 10.8462 4.59619C10.7821 4.66029 10.75 4.7308 10.75 4.80774V6.50001ZM7.25003 7.99999H5.05773C4.9808 7.99999 4.91027 8.03204 4.84616 8.09614C4.78206 8.16025 4.75001 8.23078 4.75001 8.30771V18.6923C4.75001 18.7692 4.78206 18.8397 4.84616 18.9038C4.91027 18.9679 4.9808 19 5.05773 19H7.25003V7.99999ZM16.75 19V7.99999H8.75001V19H16.75ZM18.25 7.99999V19H20.4423C20.5192 19 20.5897 18.9679 20.6539 18.9038C20.718 18.8397 20.75 18.7692 20.75 18.6923V8.30771C20.75 8.23078 20.718 8.16025 20.6539 8.09614C20.5897 8.03204 20.5192 7.99999 20.4423 7.99999H18.25Z" fill="${colors.gray.disabled}"/>
          </g>
        </svg>
        `
      }
    />
  );
};

export default TripIcon;