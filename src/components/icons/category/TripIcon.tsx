import React from 'react';
import {SvgXml} from 'react-native-svg';
import FillProps from '@components/icons/types/FillProps.ts';

const TripIcon = ({fill}: FillProps) => {
  return (
    <SvgXml
      xml={`
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <mask id="mask0_122_540" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
            <rect x="0.5" y="0.5" width="48" height="48" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_122_540)">
            <path d="M9.1154 41.4999C8.11797 41.4999 7.26605 41.1467 6.55965 40.4403C5.85322 39.7339 5.5 38.882 5.5 37.8845V17.1154C5.5 16.118 5.85322 15.2661 6.55965 14.5597C7.26605 13.8532 8.11797 13.5 9.1154 13.5H17.5V10.1155C17.5 9.11804 17.8532 8.26612 18.5597 7.55972C19.2661 6.85332 20.118 6.50012 21.1154 6.50012H27.8845C28.8819 6.50012 29.7339 6.85332 30.4403 7.55972C31.1467 8.26612 31.4999 9.11804 31.4999 10.1155V13.5H39.8845C40.8819 13.5 41.7339 13.8532 42.4403 14.5597C43.1467 15.2661 43.4999 16.118 43.4999 17.1154V37.8845C43.4999 38.882 43.1467 39.7339 42.4403 40.4403C41.7339 41.1467 40.8819 41.4999 39.8845 41.4999H9.1154ZM20.5 13.5H28.5V10.1155C28.5 9.96161 28.4359 9.82057 28.3077 9.69237C28.1794 9.56414 28.0384 9.50002 27.8845 9.50002H21.1154C20.9615 9.50002 20.8205 9.56414 20.6923 9.69237C20.5641 9.82057 20.5 9.96161 20.5 10.1155V13.5ZM13.5 16.5H9.1154C8.96153 16.5 8.82048 16.5641 8.69225 16.6923C8.56405 16.8205 8.49995 16.9616 8.49995 17.1154V37.8845C8.49995 38.0384 8.56405 38.1794 8.69225 38.3077C8.82048 38.4359 8.96153 38.5 9.1154 38.5H13.5V16.5ZM32.5 38.5V16.5H16.5V38.5H32.5ZM35.4999 16.5V38.5H39.8845C40.0384 38.5 40.1794 38.4359 40.3077 38.3077C40.4359 38.1794 40.5 38.0384 40.5 37.8845V17.1154C40.5 16.9616 40.4359 16.8205 40.3077 16.6923C40.1794 16.5641 40.0384 16.5 39.8845 16.5H35.4999Z" fill="${fill}"/>
          </g>
        </svg>
    `}
    />
  );
};

export default TripIcon;
