import styled from 'styled-components/native';

interface TextProps {
  $size?: number;
  $weight?: number;
  $center?: boolean;
  $color?: string;
  $lineHeight?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: 'Pretendard Variable';
  font-weight: ${props => props.$weight || 500};
  font-size: ${props => props.$size || 16}px;
  color: ${props => props.$color || 'black'};
  line-height: ${props =>
    props.$lineHeight ? `${props.$lineHeight}px` : 'normal'};
  text-align: ${props => (props.$center ? 'center' : 'left')};
`;
