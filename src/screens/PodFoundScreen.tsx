import {Column, Row, Text} from '@components/atomic';
import {DoubleCTA} from '@components/common/button/cta';
import {SafeAreaView} from '@components/custom';
import Typography from '@components/typography';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styled, {useTheme} from 'styled-components/native';

const PodFoundScreen = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <ScrollView style={{flexGrow: 1}}>
        <ImageContainer>
          <StyledImage src="" />
          <ArrowWrap>
            <SvgXml
              xml={`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_246_1247" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_246_1247)">
              <path d="M7.37305 12.7501L12.5423 17.9193C12.691 18.068 12.7644 18.2421 12.7625 18.4414C12.7606 18.6408 12.682 18.818 12.5269 18.9732C12.3718 19.118 12.1962 19.193 12 19.1982C11.8039 19.2033 11.6282 19.1283 11.4731 18.9732L5.13273 12.6328C5.03914 12.5392 4.97312 12.4405 4.93465 12.3366C4.89619 12.2328 4.87695 12.1206 4.87695 12.0001C4.87695 11.8796 4.89619 11.7674 4.93465 11.6636C4.97312 11.5597 5.03914 11.461 5.13273 11.3674L11.4731 5.02706C11.6116 4.88859 11.783 4.81776 11.9875 4.81456C12.192 4.81136 12.3718 4.88219 12.5269 5.02706C12.682 5.18217 12.7596 5.36037 12.7596 5.56166C12.7596 5.76294 12.682 5.94114 12.5269 6.09626L7.37305 11.2501H18.75C18.9628 11.2501 19.141 11.3219 19.2846 11.4655C19.4282 11.6091 19.5 11.7873 19.5 12.0001C19.5 12.2129 19.4282 12.3911 19.2846 12.5347C19.141 12.6783 18.9628 12.7501 18.75 12.7501H7.37305Z" fill="#F5F5F5"/>
              </g>
              </svg>              
              `}
            />
          </ArrowWrap>
        </ImageContainer>

        <Column $padding={[12, 20]} $gap={12}>
          <Row $alignItems="center" $gap={8}>
            <Profile src={''} alt="프로필" />
            <View>
              <Typography.Body $color={colors.gray.body}>
                판교 구름 스퀘어 갈 사람??
              </Typography.Body>
              <Typography.Content $color={colors.gray.subBody}>
                이채은
              </Typography.Content>
            </View>
          </Row>

          <Text $size={14} $lineHeight={20}>
            안녕하세요! 제가 더현대 서울 팝업에 요즘 관심이 생겨서 갈까 했는데
            같이 갈 사람이 없어서... 같이 가실분 있을까요!!
          </Text>
        </Column>

        <Column $padding={[8, 20]} $gap={8}>
          <Typography.Headline $color={colors.gray.body}>
            관련 정보
          </Typography.Headline>

          <Column $gap={4}>
            <Row $gap={8} $alignItems="center">
              <SvgXml
                xml={`
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_216_2341" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_216_2341)">
                    <path d="M9.99999 13.9936C11.4444 12.8397 12.5347 11.7316 13.2708 10.6691C14.007 9.60656 14.375 8.59187 14.375 7.62498C14.375 6.80954 14.226 6.11422 13.9279 5.53902C13.6298 4.96384 13.2604 4.4981 12.8197 4.14179C12.379 3.78549 11.9043 3.52694 11.3955 3.36615C10.8867 3.20535 10.4216 3.12496 9.99999 3.12496C9.57844 3.12496 9.11327 3.20535 8.60449 3.36615C8.09572 3.52694 7.62097 3.78549 7.18027 4.14179C6.73956 4.4981 6.37017 4.96384 6.0721 5.53902C5.77402 6.11422 5.62497 6.80954 5.62497 7.62498C5.62497 8.59187 5.99303 9.60656 6.72914 10.6691C7.46527 11.7316 8.55555 12.8397 9.99999 13.9936ZM9.99999 15.2756C9.87411 15.2756 9.75136 15.2561 9.63174 15.2171C9.51215 15.1781 9.40199 15.1196 9.30129 15.0416C8.20834 14.1827 7.11406 13.11 6.01843 11.8237C4.92282 10.5374 4.37502 9.1378 4.37502 7.62498C4.37502 6.67509 4.54542 5.84227 4.88622 5.12652C5.22704 4.41076 5.66543 3.81089 6.20139 3.32692C6.73735 2.84294 7.3403 2.47997 8.01024 2.23798C8.68019 1.99599 9.34344 1.875 9.99999 1.875C10.6565 1.875 11.3198 1.99599 11.9897 2.23798C12.6597 2.47997 13.2626 2.84294 13.7986 3.32692C14.3346 3.81089 14.7729 4.41076 15.1138 5.12652C15.4546 5.84227 15.625 6.67509 15.625 7.62498C15.625 9.1378 15.0772 10.5374 13.9816 11.8237C12.8859 13.11 11.7916 14.1827 10.6987 15.0416C10.598 15.1196 10.4878 15.1781 10.3682 15.2171C10.2486 15.2561 10.1259 15.2756 9.99999 15.2756ZM9.99999 8.95829C10.4049 8.95829 10.7492 8.81647 11.0328 8.53281C11.3165 8.24917 11.4583 7.9049 11.4583 7.49998C11.4583 7.09506 11.3165 6.75079 11.0328 6.46715C10.7492 6.18349 10.4049 6.04167 9.99999 6.04167C9.59508 6.04167 9.2508 6.18349 8.96716 6.46715C8.68351 6.75079 8.54168 7.09506 8.54168 7.49998C8.54168 7.9049 8.68351 8.24917 8.96716 8.53281C9.2508 8.81647 9.59508 8.95829 9.99999 8.95829ZM4.99999 18.125C4.82291 18.125 4.67448 18.065 4.5547 17.9452C4.43491 17.8254 4.37502 17.6769 4.37502 17.4997C4.37502 17.3225 4.43491 17.1741 4.5547 17.0545C4.67448 16.9348 4.82291 16.875 4.99999 16.875H15C15.1771 16.875 15.3255 16.9349 15.4453 17.0548C15.5651 17.1746 15.625 17.3231 15.625 17.5003C15.625 17.6774 15.5651 17.8258 15.4453 17.9455C15.3255 18.0651 15.1771 18.125 15 18.125L4.99999 18.125Z" fill="#373743"/>
                  </g>
                </svg>`}
              />
              <Typography.Content $color={colors.gray.subBody}>
                판교 구름 스퀘어
              </Typography.Content>
            </Row>
            <Row $gap={8} $alignItems="center">
              <SvgXml
                xml={`
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_216_3583" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_216_3583)">
                <path d="M10.625 10.5801V7.2916C10.625 7.11425 10.5652 6.96575 10.4455 6.8461C10.3259 6.72645 10.1774 6.66662 10 6.66662C9.82269 6.66662 9.67419 6.72645 9.55454 6.8461C9.43488 6.96575 9.37506 7.11425 9.37506 7.2916V10.7724C9.37506 10.8728 9.39322 10.9684 9.42954 11.0592C9.46586 11.1501 9.52302 11.2345 9.60102 11.3125L12.0385 13.75C12.1539 13.8653 12.2989 13.9244 12.4736 13.927C12.6483 13.9297 12.796 13.8707 12.9167 13.75C13.0374 13.6292 13.0978 13.4829 13.0978 13.3109C13.0978 13.1389 13.0374 12.9925 12.9167 12.8718L10.625 10.5801ZM10 17.9166C9.01713 17.9166 8.0962 17.7307 7.23723 17.3589C6.37825 16.9871 5.62932 16.4818 4.99043 15.8429C4.35156 15.204 3.84622 14.4551 3.47443 13.5961C3.10263 12.7371 2.91672 11.8162 2.91672 10.8333C2.91672 9.85039 3.10263 8.92945 3.47443 8.07048C3.84622 7.2115 4.35156 6.46257 4.99043 5.82368C5.62932 5.18481 6.37825 4.67948 7.23723 4.30768C8.0962 3.93588 9.01713 3.74998 10 3.74998C10.9829 3.74998 11.9039 3.93588 12.7628 4.30768C13.6218 4.67948 14.3708 5.18481 15.0096 5.82368C15.6485 6.46257 16.1538 7.2115 16.5256 8.07048C16.8974 8.92945 17.0834 9.85039 17.0834 10.8333C17.0834 11.8162 16.8974 12.7371 16.5256 13.5961C16.1538 14.4551 15.6485 15.204 15.0096 15.8429C14.3708 16.4818 13.6218 16.9871 12.7628 17.3589C11.9039 17.7307 10.9829 17.9166 10 17.9166ZM2.01287 6.06727C1.89215 5.94655 1.83179 5.80018 1.83179 5.62816C1.83179 5.45616 1.89215 5.3098 2.01287 5.18908L4.35583 2.84612C4.4712 2.73075 4.61623 2.67173 4.79091 2.66906C4.96559 2.66638 5.11329 2.7254 5.23402 2.84612C5.35474 2.96686 5.4151 3.11323 5.4151 3.28523C5.4151 3.45723 5.35474 3.60359 5.23402 3.72431L2.89106 6.06727C2.77568 6.18264 2.63066 6.24167 2.45597 6.24435C2.28131 6.24702 2.13361 6.18799 2.01287 6.06727ZM17.9872 6.06727C17.8665 6.18799 17.7201 6.24835 17.5481 6.24835C17.3761 6.24835 17.2297 6.18799 17.109 6.06727L14.7661 3.72431C14.6507 3.60893 14.5917 3.46391 14.589 3.28923C14.5863 3.11456 14.6453 2.96686 14.7661 2.84612C14.8868 2.7254 15.0331 2.66504 15.2052 2.66504C15.3772 2.66504 15.5235 2.7254 15.6442 2.84612L17.9872 5.18908C18.1026 5.30446 18.1616 5.44948 18.1643 5.62416C18.1669 5.79884 18.1079 5.94655 17.9872 6.06727ZM10 16.6666C11.6197 16.6666 12.9968 16.0993 14.1315 14.9647C15.2661 13.8301 15.8334 12.4529 15.8334 10.8333C15.8334 9.21364 15.2661 7.8365 14.1315 6.70187C12.9968 5.56726 11.6197 4.99996 10 4.99996C8.38038 4.99996 7.00325 5.56726 5.86862 6.70187C4.73401 7.8365 4.1667 9.21364 4.1667 10.8333C4.1667 12.4529 4.73401 13.8301 5.86862 14.9647C7.00325 16.0993 8.38038 16.6666 10 16.6666Z" fill="#18191B"/>
                </g>
                </svg>
                `}
              />
              <Typography.Content $color={colors.gray.subBody}>
                2024.01.27-13시
              </Typography.Content>
            </Row>
            <Row $gap={8} $alignItems="center">
              <SvgXml
                xml={`
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_216_2347" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_216_2347)">
                    <path d="M10.4968 9.70188C10.8515 9.3162 11.1138 8.87337 11.2836 8.37338C11.4535 7.87338 11.5385 7.3579 11.5385 6.82692C11.5385 6.29595 11.4535 5.78047 11.2836 5.28047C11.1138 4.78047 10.8515 4.33763 10.4968 3.95194C11.2286 4.03635 11.8363 4.35232 12.3197 4.89986C12.8031 5.44739 13.0449 6.08974 13.0449 6.82692C13.0449 7.56409 12.8031 8.20645 12.3197 8.75399C11.8363 9.30153 11.2286 9.61749 10.4968 9.70188ZM14.5497 16.0897C14.6544 15.8985 14.7342 15.6949 14.7892 15.4791C14.8443 15.2633 14.8718 15.0448 14.8718 14.8237V14.1346C14.8718 13.6803 14.7794 13.2481 14.5945 12.8379C14.4097 12.4278 14.1474 12.0759 13.8077 11.7821C14.4466 11.9947 15.0347 12.2815 15.5721 12.6426C16.1095 13.0037 16.3782 13.501 16.3782 14.1346V14.8237C16.3782 15.1752 16.2551 15.4741 16.0088 15.7203C15.7625 15.9666 15.4637 16.0897 15.1122 16.0897H14.5497ZM16.3782 8.9583H15.3365C15.1594 8.9583 15.011 8.89838 14.8912 8.77855C14.7714 8.6587 14.7115 8.5102 14.7115 8.33305C14.7115 8.15588 14.7714 8.00747 14.8912 7.88782C15.011 7.76817 15.1594 7.70834 15.3365 7.70834H16.3782V6.66665C16.3782 6.48957 16.4381 6.34113 16.5579 6.22134C16.6778 6.10156 16.8263 6.04167 17.0035 6.04167C17.1806 6.04167 17.329 6.10156 17.4487 6.22134C17.5683 6.34113 17.6281 6.48957 17.6281 6.66665V7.70834H18.6698C18.8469 7.70834 18.9954 7.76826 19.1151 7.88809C19.2349 8.00794 19.2948 8.15644 19.2948 8.33359C19.2948 8.51076 19.2349 8.65917 19.1151 8.77882C18.9954 8.89847 18.8469 8.9583 18.6698 8.9583H17.6281V9.99999C17.6281 10.1771 17.5682 10.3255 17.4484 10.4453C17.3285 10.5651 17.18 10.625 17.0029 10.625C16.8257 10.625 16.6773 10.5651 16.5577 10.4453C16.438 10.3255 16.3782 10.1771 16.3782 9.99999V8.9583ZM6.95514 9.74355C6.15307 9.74355 5.46645 9.45797 4.89527 8.8868C4.3241 8.31562 4.03852 7.62899 4.03852 6.82692C4.03852 6.02484 4.3241 5.33822 4.89527 4.76705C5.46645 4.19587 6.15307 3.91028 6.95514 3.91028C7.75723 3.91028 8.44385 4.19587 9.01502 4.76705C9.5862 5.33822 9.87179 6.02484 9.87179 6.82692C9.87179 7.62899 9.5862 8.31562 9.01502 8.8868C8.44385 9.45797 7.75723 9.74355 6.95514 9.74355ZM0.705185 14.8237V14.2372C0.705185 13.829 0.816025 13.4511 1.03771 13.1034C1.2594 12.7556 1.55561 12.4883 1.92633 12.3013C2.75004 11.8974 3.58096 11.5946 4.4191 11.3926C5.25724 11.1907 6.10259 11.0898 6.95514 11.0898C7.8077 11.0898 8.65305 11.1907 9.49119 11.3926C10.3293 11.5946 11.1603 11.8974 11.984 12.3013C12.3547 12.4883 12.6509 12.7556 12.8726 13.1034C13.0943 13.4511 13.2051 13.829 13.2051 14.2372V14.8237C13.2051 15.1752 13.082 15.4741 12.8357 15.7203C12.5895 15.9666 12.2906 16.0897 11.9391 16.0897H1.97116C1.61968 16.0897 1.32081 15.9666 1.07456 15.7203C0.82831 15.4741 0.705185 15.1752 0.705185 14.8237ZM6.95514 8.49359C7.41348 8.49359 7.80584 8.3304 8.13223 8.00401C8.45862 7.67762 8.62181 7.28526 8.62181 6.82692C8.62181 6.36859 8.45862 5.97623 8.13223 5.64984C7.80584 5.32345 7.41348 5.16026 6.95514 5.16026C6.49681 5.16026 6.10445 5.32345 5.77806 5.64984C5.45167 5.97623 5.28848 6.36859 5.28848 6.82692C5.28848 7.28526 5.45167 7.67762 5.77806 8.00401C6.10445 8.3304 6.49681 8.49359 6.95514 8.49359ZM1.95514 14.8397H11.9551V14.2372C11.9551 14.0683 11.9063 13.9121 11.8085 13.7684C11.7108 13.6247 11.578 13.5075 11.4103 13.4166C10.6923 13.063 9.96026 12.7951 9.21406 12.6129C8.46788 12.4308 7.71491 12.3397 6.95514 12.3397C6.19539 12.3397 5.44242 12.4308 4.69623 12.6129C3.95005 12.7951 3.21798 13.063 2.50002 13.4166C2.33228 13.5075 2.19954 13.6247 2.10179 13.7684C2.00403 13.9121 1.95514 14.0683 1.95514 14.2372V14.8397Z" fill="#18191B"/>
                  </g>
                </svg>`}
              />
              <Typography.Content $color={colors.gray.subBody}>
                23/80명
              </Typography.Content>
            </Row>
            <Row $gap={8} $alignItems="center">
              <SvgXml
                xml={`
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_216_3246" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_216_3246)">
                      <path d="M2.08336 16.6666H13.109V17.1794C13.109 17.3834 13.0371 17.5573 12.8934 17.701C12.7497 17.8447 12.5759 17.9165 12.3718 17.9165H2.82055C2.61649 17.9165 2.44262 17.8447 2.29892 17.701C2.15521 17.5573 2.08336 17.3834 2.08336 17.1794V16.6666ZM2.08336 14.8396V14.3268C2.08336 14.1228 2.15521 13.9489 2.29892 13.8052C2.44262 13.6615 2.61649 13.5897 2.82055 13.5897H5.9295V13.0288C5.9295 12.8154 6.00169 12.6365 6.14605 12.4921C6.29041 12.3478 6.46929 12.2756 6.68269 12.2756H8.50963C8.72303 12.2756 8.90192 12.3478 9.0463 12.4921C9.19066 12.6365 9.26284 12.8154 9.26284 13.0288V13.5897H12.3718C12.5759 13.5897 12.7497 13.6615 12.8934 13.8052C13.0371 13.9489 13.109 14.1228 13.109 14.3268V14.8396H2.08336ZM15.1603 12.7851C14.7137 12.3225 14.3456 11.8281 14.0561 11.302C13.7666 10.7758 13.6218 10.1569 13.6218 9.4454V2.83646C13.6218 2.62306 13.694 2.44418 13.8384 2.29981C13.9827 2.15544 14.1616 2.08325 14.375 2.08325H17.1634C17.3768 2.08325 17.5557 2.15544 17.7001 2.29981C17.8445 2.44418 17.9167 2.62306 17.9167 2.83646V9.4454C17.9167 10.1569 17.7794 10.7779 17.5048 11.3084C17.2302 11.8388 16.8654 12.3311 16.4102 12.7851V16.6666H17.2917C17.4687 16.6666 17.6172 16.7265 17.737 16.8463C17.8568 16.9662 17.9167 17.1147 17.9167 17.2918C17.9167 17.469 17.8568 17.6174 17.737 17.737C17.6172 17.8567 17.4687 17.9165 17.2917 17.9165H15.9135C15.7001 17.9165 15.5212 17.8444 15.3768 17.7C15.2325 17.5556 15.1603 17.3767 15.1603 17.1633V12.7851ZM14.8718 6.82684H16.6667V3.33323H14.8718V6.82684ZM15.7853 11.6121C16.0353 11.3685 16.2447 11.0525 16.4135 10.6641C16.5823 10.2758 16.6667 9.86955 16.6667 9.4454V8.07679H14.8718V9.4454C14.8718 9.86955 14.9573 10.2758 15.1282 10.6641C15.2991 11.0525 15.5182 11.3685 15.7853 11.6121Z" fill="#18191B"/>
                    </g>
                  </svg>`}
              />
              <Typography.Content $color={colors.gray.subBody}>
                관광지 탐방
              </Typography.Content>
            </Row>
          </Column>
        </Column>
      </ScrollView>
      <Row
        $alignItems="center"
        $justifyContent="center"
        $padding={[8, 20]}
        $gap={8}>
        <DoubleCTA text={{primary: '참여', secondary: '취소'}} />
      </Row>
    </SafeAreaView>
  );
};

export default PodFoundScreen;

const ImageContainer = styled.View`
  width: 100%;
  height: 248px;
  position: relative;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: red;
`;

const ArrowWrap = styled.View`
  width: 100%;
  height: 54px;
  padding: 0 20px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
`;

const Profile = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-color: #ddd;
`;