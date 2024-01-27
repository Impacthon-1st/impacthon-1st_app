import React from 'react';
import {SvgXml} from 'react-native-svg';
import IconProps from '@components/icons/types/IconProps.ts';

const FlightIcon = ({fill}: IconProps) => {
  return (
    <SvgXml
      xml={`
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <mask id="mask0_122_624" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
            <rect x="0.5" y="0.5" width="48" height="48" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_122_624)">
            <path d="M18.423 44.6191C16.8897 44.6191 15.5307 44.1871 14.3461 43.323C13.1615 42.4589 12.2935 41.314 11.7423 39.8884C11.273 40.5756 10.6557 41.1044 9.89035 41.4749C9.12498 41.8454 8.32818 42.0307 7.49995 42.0307C5.95382 42.0307 4.65063 41.4954 3.5904 40.4249C2.53013 39.3544 2 38.0564 2 36.5307C2 35.2 2.44743 33.9948 3.3423 32.9153C4.23717 31.8359 5.36922 31.2513 6.73845 31.1615C6.16922 30.5205 5.72433 29.7961 5.4038 28.9884C5.0833 28.1807 4.92305 27.3346 4.92305 26.45C4.92305 25.232 5.22945 24.0878 5.84225 23.0173C6.45508 21.9468 7.31405 21.0705 8.41915 20.3885C8.54735 20.8346 8.72107 21.3128 8.9403 21.823C9.15953 22.3333 9.4012 22.7807 9.6653 23.1653C9.1217 23.5833 8.70375 24.0826 8.41145 24.6634C8.11912 25.2442 7.97295 25.8564 7.97295 26.5C7.97295 28.4692 8.73962 29.7122 10.273 30.2288C11.8063 30.7455 13.3204 31.15 14.8153 31.4423L15.5153 32.6384C15.1486 33.7051 14.8415 34.6102 14.5941 35.3538C14.3467 36.0974 14.2229 36.7756 14.2229 37.3884C14.2229 38.5166 14.6294 39.5006 15.4422 40.3404C16.255 41.1801 17.2422 41.6 18.4038 41.6C19.5858 41.6 20.5858 41.1724 21.4038 40.3173C22.2217 39.4622 22.9051 38.4071 23.4538 37.1519C24.0025 35.8968 24.4416 34.5667 24.7711 33.1615C25.1006 31.7564 25.3718 30.5038 25.5846 29.4038C25.6718 28.9526 25.891 28.6007 26.2422 28.3481C26.5935 28.0955 26.9717 28.0333 27.3769 28.1615C27.8153 28.2897 28.1378 28.5494 28.3442 28.9404C28.5506 29.3314 28.5999 29.7525 28.4922 30.2038C28.205 31.6474 27.8441 33.2102 27.4095 34.8922C26.9749 36.5743 26.3852 38.1358 25.6403 39.5768C24.8954 41.0179 23.9435 42.2185 22.7845 43.1788C21.6256 44.1391 20.1717 44.6191 18.423 44.6191ZM7.49995 39.0307C8.19485 39.0307 8.78525 38.7878 9.27115 38.3019C9.75705 37.816 10 37.2256 10 36.5307C10 35.8358 9.75705 35.2454 9.27115 34.7595C8.78525 34.2736 8.19485 34.0307 7.49995 34.0307C6.80508 34.0307 6.2147 34.2736 5.7288 34.7595C5.2429 35.2454 4.99995 35.8358 4.99995 36.5307C4.99995 37.2256 5.2429 37.816 5.7288 38.3019C6.2147 38.7878 6.80508 39.0307 7.49995 39.0307ZM21.7652 29.8731C21.4345 30.2039 21.0345 30.341 20.5653 30.2846C20.0961 30.2282 19.6794 30.0346 19.3153 29.7038C16.8127 27.4346 14.8012 25.3788 13.2807 23.5365C11.7602 21.6942 11 19.6987 11 17.55C11 15.5244 11.6935 13.818 13.0807 12.4308C14.4679 11.0436 16.1743 10.35 18.1999 10.35C18.4486 10.35 18.6711 10.3648 18.8672 10.3943C19.0634 10.4238 19.2602 10.4578 19.4576 10.4962C19.3115 10.1757 19.1987 9.85199 19.1192 9.52509C19.0397 9.19816 19 8.85136 19 8.48469C19 6.95906 19.5352 5.66099 20.6057 4.59049C21.6762 3.51999 22.9743 2.98474 24.4999 2.98474C26.0255 2.98474 27.3236 3.51999 28.3941 4.59049C29.4646 5.66099 29.9999 6.95906 29.9999 8.48469C29.9999 8.85136 29.9601 9.19302 29.8806 9.50969C29.8011 9.82636 29.6883 10.1449 29.5421 10.4654C29.7396 10.427 29.9364 10.3981 30.1326 10.3789C30.3287 10.3597 30.5512 10.35 30.7999 10.35C32.5563 10.35 34.0672 10.8859 35.3326 11.9577C36.5979 13.0295 37.4024 14.3744 37.746 15.9923C37.287 15.9179 36.7723 15.8807 36.2018 15.8807C35.6313 15.8807 35.1063 15.9077 34.6269 15.9615C34.3294 15.1949 33.8435 14.5679 33.1691 14.0807C32.4948 13.5936 31.705 13.35 30.7999 13.35C29.5948 13.35 28.6448 13.682 27.9499 14.3461C27.255 15.0102 26.3281 16.0115 25.1691 17.35H23.7807C22.5884 15.9577 21.6448 14.9429 20.9499 14.3057C20.255 13.6686 19.3384 13.35 18.1999 13.35C16.9922 13.35 15.9903 13.7481 15.1941 14.5442C14.3979 15.3404 13.9999 16.3423 13.9999 17.55C13.9999 18.9885 14.6614 20.4949 15.9845 22.0693C17.3076 23.6436 19.1242 25.4859 21.4345 27.5962C21.7986 27.9065 22.0223 28.2859 22.1056 28.7346C22.189 29.1833 22.0755 29.5628 21.7652 29.8731ZM24.4999 10.9847C25.1948 10.9847 25.7852 10.7418 26.2711 10.2559C26.757 9.76996 26.9999 9.17956 26.9999 8.48469C26.9999 7.78982 26.757 7.19943 26.2711 6.71349C25.7852 6.22759 25.1948 5.98464 24.4999 5.98464C23.805 5.98464 23.2146 6.22759 22.7287 6.71349C22.2428 7.19943 21.9998 7.78982 21.9998 8.48469C21.9998 9.17956 22.2428 9.76996 22.7287 10.2559C23.2146 10.7418 23.805 10.9847 24.4999 10.9847ZM30.4883 44.6384C29.8832 44.6384 29.2864 44.564 28.698 44.4153C28.1095 44.2666 27.5397 44.0269 26.9884 43.6961C27.2653 43.3448 27.5422 42.9295 27.8192 42.45C28.0961 41.9705 28.346 41.5282 28.5691 41.1231C28.8973 41.3052 29.2287 41.4334 29.5633 41.5077C29.8979 41.5821 30.2294 41.6192 30.5576 41.6192C31.7396 41.6192 32.7403 41.1994 33.5595 40.3596C34.3787 39.5199 34.7883 38.5192 34.7883 37.3577C34.7883 36.7244 34.6646 36.0442 34.4172 35.3173C34.1698 34.5904 33.8627 33.6936 33.496 32.6269L34.2153 31.4308C35.7435 31.1385 37.2659 30.7308 38.7826 30.2077C40.2993 29.6846 41.0576 28.4384 41.0576 26.4692C41.0576 24.9948 40.5275 23.9128 39.4672 23.223C38.4069 22.5333 37.2294 22.1884 35.9345 22.1884C34.7422 22.1884 33.3633 22.3852 31.7979 22.7788C30.2325 23.1724 28.4473 23.6923 26.4421 24.3384C25.9909 24.4666 25.5595 24.4544 25.1479 24.3018C24.7364 24.1493 24.4666 23.8538 24.3384 23.4153C24.2101 22.9769 24.2775 22.5686 24.5403 22.1904C24.8031 21.8122 25.1537 21.559 25.5922 21.4308C27.6537 20.7769 29.5185 20.2333 31.1864 19.8C32.8544 19.3667 34.4089 19.15 35.8498 19.15C38.0088 19.15 39.9165 19.7885 41.5729 21.0654C43.2293 22.3423 44.0575 24.1436 44.0575 26.4692C44.0575 27.3538 43.9004 28.1904 43.5863 28.9788C43.2723 29.7673 42.8306 30.4949 42.2613 31.1615C43.6306 31.2641 44.7626 31.8487 45.6575 32.9153C46.5524 33.982 46.9998 35.1871 46.9998 36.5307C46.9998 38.0435 46.4697 39.3384 45.4094 40.4153C44.3492 41.4922 43.046 42.0307 41.4999 42.0307C40.6716 42.0307 39.8748 41.8454 39.1094 41.4749C38.3441 41.1044 37.7268 40.5756 37.2575 39.8884C36.7063 41.314 35.8319 42.4621 34.6345 43.3326C33.4371 44.2031 32.055 44.6384 30.4883 44.6384ZM41.5499 39.0307C42.2447 39.0307 42.8268 38.7878 43.296 38.3019C43.7652 37.816 43.9999 37.2256 43.9999 36.5307C43.9999 35.8358 43.7569 35.2371 43.271 34.7345C42.7851 34.232 42.1947 33.9807 41.4999 33.9807C40.805 33.9807 40.2146 34.2236 39.7286 34.7095C39.2427 35.1954 38.9998 35.7858 38.9998 36.4807C38.9998 37.1756 39.2511 37.7743 39.7537 38.2769C40.2562 38.7795 40.8549 39.0307 41.5499 39.0307Z" fill="${fill}"/>
          </g>
        </svg>
    `}
    />
  );
};

export default FlightIcon;
