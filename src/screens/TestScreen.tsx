import TextButton from '@components/common/button/TextButton';
import SafeAreaView from '@components/custom/SafeAreaView';
import React from 'react';

const TestScreen = () => {
  return (
    <SafeAreaView>
      <TextButton
        buttonPosition="right"
        svgXml={`
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <mask id="mask0_45_182" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <rect width="20" height="20" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_45_182)">
              <path d="M9.37504 10.625H5.20837C5.03129 10.625 4.88285 10.5651 4.76306 10.4453C4.64327 10.3254 4.58337 10.1769 4.58337 9.99975C4.58337 9.82258 4.64327 9.67417 4.76306 9.55452C4.88285 9.43487 5.03129 9.37504 5.20837 9.37504H9.37504V5.20837C9.37504 5.03129 9.43496 4.88285 9.55479 4.76306C9.67464 4.64327 9.82314 4.58337 10.0003 4.58337C10.1775 4.58337 10.3259 4.64327 10.4455 4.76306C10.5652 4.88285 10.625 5.03129 10.625 5.20837V9.37504H14.7917C14.9688 9.37504 15.1172 9.43496 15.237 9.55479C15.3568 9.67464 15.4167 9.82314 15.4167 10.0003C15.4167 10.1775 15.3568 10.3259 15.237 10.4455C15.1172 10.5652 14.9688 10.625 14.7917 10.625H10.625V14.7917C10.625 14.9688 10.5651 15.1172 10.4452 15.237C10.3254 15.3568 10.1769 15.4167 9.99975 15.4167C9.82258 15.4167 9.67417 15.3568 9.55452 15.237C9.43487 15.1172 9.37504 14.9688 9.37504 14.7917V10.625Z" fill="#373743"/>
            </g>
          </svg>
        `}
        onPress={() => {}}
        text="텍스트"
      />
    </SafeAreaView>
  );
};

export default TestScreen;
