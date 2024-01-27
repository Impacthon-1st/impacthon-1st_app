import {Column, Row} from '@components/atomic';
import {DoubleCTA} from '@components/common/button/cta';
import PodMapItem from '@components/common/pod/PodMapItem';
import {SafeAreaView} from '@components/custom';
import Typography from '@components/typography';
import React from 'react';
import {ScrollView} from 'react-native';
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
            <PodMapItem {...item} />
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
