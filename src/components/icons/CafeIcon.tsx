import React from 'react';
import {SvgXml} from 'react-native-svg';

const FlightIcon = () => {
  return (
    <SvgXml
      xml={`
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <mask id="mask0_122_570" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
            <rect x="0.5" y="0.5" width="48" height="48" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_122_570)">
            <path d="M11 41.5C10.575 41.5 10.2188 41.3561 9.93125 41.0685C9.64375 40.7809 9.5 40.4245 9.5 39.9993C9.5 39.5741 9.64375 39.2179 9.93125 38.9308C10.2188 38.6436 10.575 38.5 11 38.5H37.9999C38.4249 38.5 38.7812 38.6438 39.0687 38.9315C39.3562 39.2191 39.4999 39.5755 39.4999 40.0007C39.4999 40.4258 39.3562 40.782 39.0687 41.0692C38.7812 41.3564 38.4249 41.5 37.9999 41.5H11ZM16.6346 33.7307C14.6654 33.7307 12.984 33.0435 11.5904 31.6692C10.1968 30.2949 9.5 28.6359 9.5 26.6923V10.5385C9.5 9.69489 9.79552 8.97761 10.3865 8.38661C10.9775 7.79558 11.6948 7.50006 12.5384 7.50006H39.8076C40.823 7.50006 41.6922 7.85328 42.4153 8.55971C43.1384 9.26611 43.4999 10.1244 43.4999 11.1347V16.3654C43.4999 17.3756 43.1384 18.234 42.4153 18.9404C41.6922 19.6468 40.823 20 39.8076 20H35.8076V26.6923C35.8076 28.6359 35.1108 30.2949 33.7173 31.6692C32.3237 33.0435 30.6423 33.7307 28.673 33.7307H16.6346ZM16.6346 30.7308H28.673C29.8101 30.7308 30.7834 30.3346 31.5931 29.5423C32.4028 28.7499 32.8077 27.7973 32.8077 26.6847V10.5H12.4999V26.6918C12.4999 27.805 12.9048 28.7564 13.7145 29.5462C14.5242 30.3359 15.4976 30.7308 16.6346 30.7308ZM35.8076 17.0001H39.8076C39.9999 17.0001 40.1634 16.9392 40.298 16.8174C40.4326 16.6956 40.5 16.5449 40.5 16.3654V11.1347C40.5 10.9552 40.4326 10.8045 40.298 10.6827C40.1634 10.5609 39.9999 10.5 39.8076 10.5H35.8076V17.0001ZM16.6346 30.7308H12.4999H32.8077H16.6346Z" fill="#F3483F"/>
          </g>
        </svg>
    `}
    />
  );
};

export default FlightIcon;
