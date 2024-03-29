import {Row} from '@components/atomic';
import React from 'react';
import {Alert, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';

interface Props {
  id: number;
  profile: string;
  name: string;
}

const RequestPodItem = (item: Props) => {
  const [isAccept, setIsAccept] = React.useState(false);
  return (
    !isAccept && (
      <Item
        key={item.id}
        onPress={() => {
          Alert.alert('팟 참가 신청', '수락하시겠습니까?', [
            {
              text: '거절',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: '수락', onPress: () => setIsAccept(true)},
          ]);
        }}>
        <Row $alignItems="center" $justifyContent="space-between" $gap={16}>
          <Row $alignItems="center" $gap={8}>
            <Profile src={item.profile} alt="프로필" />
            <View>
              <Name>{item.name}</Name>
              <Message>팟 요청이 왔어요.</Message>
            </View>
          </Row>

          <SvgXml
            xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_179_708" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_179_708)">
<path d="M12.9462 12L8.87309 7.92689C8.73462 7.78844 8.66379 7.6144 8.66059 7.40479C8.65737 7.19519 8.7282 7.01795 8.87309 6.87309C9.01795 6.7282 9.19359 6.65576 9.39999 6.65576C9.60639 6.65576 9.78202 6.7282 9.92689 6.87309L14.4211 11.3673C14.5147 11.4609 14.5807 11.5596 14.6192 11.6635C14.6577 11.7673 14.6769 11.8795 14.6769 12C14.6769 12.1205 14.6577 12.2327 14.6192 12.3365C14.5807 12.4404 14.5147 12.5391 14.4211 12.6327L9.92689 17.1269C9.78844 17.2654 9.6144 17.3362 9.40479 17.3394C9.19519 17.3426 9.01795 17.2718 8.87309 17.1269C8.7282 16.982 8.65576 16.8064 8.65576 16.6C8.65576 16.3936 8.7282 16.218 8.87309 16.0731L12.9462 12Z" fill="#000"/>
</g>
</svg>
`}
          />
        </Row>
      </Item>
    )
  );
};

export default RequestPodItem;

const Item = styled.TouchableOpacity`
  width: 100%;
  padding: 8px 20px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.gray.solid};
`;

const Profile = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-color: #ddd;
`;

const Name = styled.Text`
  font-weight: 500;
  line-height: 26px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray.body};
`;

const Message = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray.subBody};
`;
