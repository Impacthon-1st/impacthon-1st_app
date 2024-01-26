import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Row} from '@components/atomic';
import {SvgXml} from 'react-native-svg';
import Typography from '@components/typography';
import {Pressable} from 'react-native';

interface HeaderProps {
  shoBack?: boolean;
  onBack?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Header = ({title, shoBack, onBack, children}: HeaderProps) => {
  const {colors} = useTheme();
  return (
    <Wrapper>
      <Container>
        <Row $alignItems={'center'} $gap={4}>
          {shoBack && (
            <Pressable onPress={onBack}>
              <SvgXml
                xml={`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_51_51" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_51_51)">
                  <path d="M7.37305 12.75L12.5423 17.9192C12.691 18.0679 12.7644 18.242 12.7625 18.4413C12.7606 18.6407 12.682 18.8179 12.5269 18.973C12.3718 19.1179 12.1962 19.1929 12 19.198C11.8039 19.2032 11.6282 19.1282 11.4731 18.973L5.13273 12.6327C5.03914 12.5391 4.97312 12.4404 4.93465 12.3365C4.89619 12.2327 4.87695 12.1205 4.87695 12C4.87695 11.8795 4.89619 11.7673 4.93465 11.6635C4.97312 11.5596 5.03914 11.4609 5.13273 11.3673L11.4731 5.02693C11.6116 4.88847 11.783 4.81763 11.9875 4.81443C12.192 4.81123 12.3718 4.88207 12.5269 5.02693C12.682 5.18205 12.7596 5.36025 12.7596 5.56153C12.7596 5.76282 12.682 5.94102 12.5269 6.09614L7.37305 11.25H18.75C18.9628 11.25 19.141 11.3218 19.2846 11.4654C19.4282 11.609 19.5 11.7872 19.5 12C19.5 12.2128 19.4282 12.391 19.2846 12.5346C19.141 12.6782 18.9628 12.75 18.75 12.75H7.37305Z" fill="${colors.gray.body}"/>
                </g>
              </svg>
            `}
              />
            </Pressable>
          )}
          <Typography.Headline $color={colors.gray.body}>
            {title}
          </Typography.Headline>
        </Row>
        <Row $alignItems={'center'} $gap={8}>
          {children}
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 0 20px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 54px;
`;

export default Header;
