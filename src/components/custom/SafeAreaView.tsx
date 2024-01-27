import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.gray.background};
  align-items: flex-start;
`;

export default SafeAreaView;
