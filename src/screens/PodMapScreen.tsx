import {Column, Row} from '@components/atomic';
import {DoubleCTA} from '@components/common/button/cta';
import {SafeAreaView} from '@components/custom';
import Typography from '@components/typography';
import React from 'react';
import {Linking, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styled, {useTheme} from 'styled-components/native';

const BLOG_LIST = [
  {
    title: '더현대 철권8팝업! 성공적, 파이브가이즈 꼭 먹고!',
    link: 'https://www.youtube.com',
  },
  {title: '펜필드 Penfield 팝업 @ 더현대서울', link: 'https://www.youtube.com'},
  {
    title: '여의도 더현대 서울 펜필드 팝업 후기.',
    link: 'https://www.youtube.com',
  },
];

const PodScreen = () => {
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
        <Column $padding={[12, 20]}>
          <Typography.Headline $color={colors.gray.body}>
            더현대 서울
          </Typography.Headline>
          <Typography.Body $color={colors.gray.subBody}>
            더현대 서울은 현대백화점이 2015년 판교점 이후 6년 만에 선보이는
            열여섯 번째 점포이다. 현대가 파크원에 임차한 점포이다. 정지선
            현대백화점그룹 회장이 더현대 서울을 대한민국 최고의 랜드마크이자
            그룹의 위상을 한단계 업그레이드하는 플래그십 스토어로 만들겠다는
            포부를 밝혔다. 정지선의 야심작이라고 볼 만하다. 정지선 회장은 이후
            더현대 서울의 대성공과 ESG 운영 성과를 인정받아 한국 경영자 상을
            수상하였으니 야심작을 넘어 대표작이라고도 볼 수 있다.
          </Typography.Body>
        </Column>
        <Column $padding={[8, 20]} $gap={8}>
          <Typography.Headline $color={colors.gray.body}>
            관련 블로그
          </Typography.Headline>
          {BLOG_LIST.map(item => (
            <BlogItem>
              <SvgXml
                xml={`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_216_3478" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_216_3478)">
                  <path d="M7.03845 16.5385C5.78282 16.5385 4.7125 16.0961 3.8275 15.2112C2.9425 14.3263 2.5 13.2561 2.5 12.0006C2.5 10.7452 2.9425 9.67479 3.8275 8.78954C4.7125 7.90429 5.78282 7.46167 7.03845 7.46167H10.0577C10.2702 7.46167 10.4483 7.53358 10.592 7.67739C10.7358 7.82119 10.8077 7.9994 10.8077 8.212C10.8077 8.42458 10.7358 8.60266 10.592 8.74624C10.4483 8.88983 10.2702 8.96162 10.0577 8.96162H7.0373C6.19832 8.96162 5.48235 9.2581 4.8894 9.85105C4.29645 10.444 3.99998 11.1603 3.99998 12.0001C3.99998 12.8398 4.29645 13.5562 4.8894 14.1491C5.48235 14.7421 6.19832 15.0386 7.0373 15.0386H10.0577C10.2702 15.0386 10.4483 15.1105 10.592 15.2543C10.7358 15.3981 10.8077 15.5763 10.8077 15.7889C10.8077 16.0015 10.7358 16.1796 10.592 16.3231C10.4483 16.4667 10.2702 16.5385 10.0577 16.5385H7.03845ZM8.99998 12.7501C8.78748 12.7501 8.60936 12.6782 8.46563 12.5344C8.32188 12.3906 8.25 12.2124 8.25 11.9998C8.25 11.7872 8.32188 11.6091 8.46563 11.4655C8.60936 11.3219 8.78748 11.2501 8.99998 11.2501H15C15.2125 11.2501 15.3906 11.322 15.5344 11.4658C15.6781 11.6096 15.75 11.7878 15.75 12.0004C15.75 12.213 15.6781 12.3911 15.5344 12.5347C15.3906 12.6783 15.2125 12.7501 15 12.7501H8.99998ZM13.9423 16.5385C13.7298 16.5385 13.5517 16.4666 13.4079 16.3228C13.2642 16.179 13.1923 16.0008 13.1923 15.7882C13.1923 15.5756 13.2642 15.3975 13.4079 15.2539C13.5517 15.1104 13.7298 15.0386 13.9423 15.0386H16.9627C17.8016 15.0386 18.5176 14.7421 19.1106 14.1491C19.7035 13.5562 20 12.8398 20 12.0001C20 11.1603 19.7035 10.444 19.1106 9.85105C18.5176 9.2581 17.8016 8.96162 16.9627 8.96162H13.9423C13.7298 8.96162 13.5517 8.88972 13.4079 8.74592C13.2642 8.6021 13.1923 8.4239 13.1923 8.21132C13.1923 7.99872 13.2642 7.82063 13.4079 7.67704C13.5517 7.53346 13.7298 7.46167 13.9423 7.46167H16.9615C18.2171 7.46167 19.2875 7.90411 20.1725 8.789C21.0575 9.67388 21.5 10.7441 21.5 11.9995C21.5 13.255 21.0575 14.3254 20.1725 15.2106C19.2875 16.0959 18.2171 16.5385 16.9615 16.5385H13.9423Z" fill="#1C1B1F"/>
                </g>
              </svg>
              `}
              />
              <Typography.Content
                $color={colors.gray.subBody}
                onPress={async () =>
                  (await Linking.canOpenURL(item.link)) &&
                  Linking.openURL(item.link)
                }>
                {item.title}
              </Typography.Content>
            </BlogItem>
          ))}
        </Column>
      </ScrollView>
      <Row
        $alignItems="center"
        $justifyContent="center"
        $padding={[8, 20]}
        $gap={8}>
        <DoubleCTA text={{primary: '길 찾기', secondary: '팟 생성'}} />
      </Row>
    </SafeAreaView>
  );
};

export default PodScreen;

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

const BlogItem = styled.View`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  border: 1px solid #f2f4f6;
`;
