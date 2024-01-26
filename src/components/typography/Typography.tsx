import styled from 'styled-components/native';

const base = styled.Text<{$color: string}>`
  font-family: 'Pretendard Variable';
  color: ${props => props.$color};
`;

export const Title = styled(base)`
  font-weight: 700;
  font-size: 24px;
`;

export const Headline = styled(base)`
  font-weight: 700;
  font-size: 20px;
`;

export const Body = styled(base)<{$emphasized?: boolean}>`
  font-weight: ${props => (props.$emphasized ? 600 : 500)}
  font-size: 16px;
`;

export const Content = styled(base)<{$emphasized?: boolean}>`
  font-weight: ${props => (props.$emphasized ? 600 : 500)}
  font-size: 14px;
`;

export const Caption = styled(base)`
  font-weight: 500;
  font-size: 12px;
`;
