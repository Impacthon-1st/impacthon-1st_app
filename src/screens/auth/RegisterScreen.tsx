import React, {useEffect, useState} from 'react';
import {SafeAreaView} from '@components/custom';
import {Header, Title} from '@components/layout';
import {TextField} from '@components/common/input';
import {Row, Spacer} from '@components/atomic';
import {SingleCTA} from '@components/common/button/cta';
import Dropdown from '@components/common/input/Dropdown.tsx';
import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai';
import {
  CafeIcon,
  DiningIcon,
  FlightIcon,
  PersonIcon,
  PlanIcon,
  RunIcon,
  TablewareIcon,
  TogetherIcon,
  TripIcon,
} from '@components/icons/category';
import CategoryCard from '@components/common/CategoryCard.tsx';
import CTAButton from '@components/common/button/cta/SingleCTA.tsx';
import styled, {useTheme} from 'styled-components/native';
import Typography from '@components/typography';

const globalStepAtom = atom<'auth' | 'info' | 'category'>('category');

const idAtom = atom('');
const passwordAtom = atom('');
const nameAtom = atom('');
const birthAtom = atom('');
const genderAtom = atom('');
const categoryAtom = atom<string[]>([]);

const RegisterScreen = () => {
  const globalStep = useAtomValue(globalStepAtom);
  return (
    <SafeAreaView>
      {globalStep === 'auth' && <AuthStep />}
      {globalStep === 'info' && <InfoStep />}
      {globalStep === 'category' && <CategoryStep />}
    </SafeAreaView>
  );
};

const AuthStep = () => {
  const setGlobalStep = useSetAtom(globalStepAtom);
  const [step, setStep] = useState(0);
  const [id, setId] = useAtom(idAtom);

  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const [password, setPassword] = useAtom(passwordAtom);

  return (
    <>
      <Header title={'회원가입'} />
      <Title
        title={'기본 정보을 알려주세요!'}
        description={'앱 내 기능을 더욱 간편하게 사용할 수 있어요.'}
      />
      {step >= 0 && (
        <TextField
          value={id}
          onChange={setId}
          placeholder={'최대 12자 내로 입력 부탁해요.'}
          label={'아이디'}
          required
        />
      )}
      {step >= 1 && (
        <TextField
          value={firstPassword}
          onChange={setFirstPassword}
          placeholder={'특수문자 포함 8~24자.'}
          label={'비밀번호'}
          isSecure={true}
          required
        />
      )}
      {step >= 2 && (
        <TextField
          value={secondPassword}
          onChange={setSecondPassword}
          placeholder={'다시 한 번 입력해 주세요.'}
          label={'비밀번호 확인'}
          isSecure={true}
          required
        />
      )}
      <Spacer $flex={1} />
      <SingleCTA
        avoidKeyboard
        text={'다음'}
        onPress={() => (step === 2 ? setGlobalStep('info') : setStep(step + 1))}
        disabled={
          (step >= 0 && id.trim().length === 0) ||
          (step >= 1 && firstPassword.trim().length === 0) ||
          (step >= 2 && firstPassword !== secondPassword)
        }
      />
    </>
  );
};

const InfoStep = () => {
  const setGlobalStep = useSetAtom(globalStepAtom);
  const [step, setStep] = useState(1);
  const [name, setName] = useAtom(nameAtom);
  const [birth, setBirth] = useAtom(birthAtom);
  const [gender, setGender] = useAtom(genderAtom);

  return (
    <>
      <Header title={'회원가입'} />
      <Title
        title={'기본 정보을 알려주세요!'}
        description={'앱 내 기능을 더욱 간편하게 사용할 수 있어요.'}
      />
      {step >= 0 && (
        <TextField
          value={name}
          onChange={setName}
          placeholder={'최대 12자 내로 입력 부탁해요.'}
          label={'이름'}
          required
        />
      )}
      {step >= 1 && (
        <TextField
          value={birth.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1/$2/$3')}
          onChange={setBirth}
          placeholder={'YYYY/MM/DD'}
          label={'생년월일'}
          inputMode={'numeric'}
          required
        />
      )}
      {step >= 2 && (
        <Dropdown
          label={'성별'}
          data={['남자', '여자', '기타']}
          onChange={setGender}
          placeholder={'선택해주세요'}
          required
          value={gender}
        />
      )}
      <Spacer $flex={1} />
      <SingleCTA
        avoidKeyboard
        text={'다음'}
        onPress={() =>
          step === 3 ? setGlobalStep('category') : setStep(step + 1)
        }
        disabled={
          (step >= 0 && name.trim().length === 0) ||
          (step >= 1 && birth.trim().length === 0) ||
          (step >= 3 && gender.trim().length === 0)
        }
      />
    </>
  );
};

const data = [
  {
    category: '국내여행',
    Icon: TripIcon,
  },
  {
    category: '해외여행',
    Icon: FlightIcon,
  },
  {
    category: '실내',
    Icon: CafeIcon,
  },
  {
    category: '실외',
    Icon: DiningIcon,
  },
  {
    category: '계획적',
    Icon: PlanIcon,
  },
  {
    category: '즉흥적',
    Icon: RunIcon,
  },
  {
    category: '혼자',
    Icon: PersonIcon,
  },
  {
    category: '다같이',
    Icon: TogetherIcon,
  },
  {
    category: '맛집탐방',
    Icon: TablewareIcon,
  },
];

const CategoryStep = () => {
  const {colors} = useTheme();
  const [category, setCategory] = useAtom(categoryAtom);
  const [selectedList, setSelectedList] = useState<boolean[]>(
    Array.from({length: data.length}, () => false),
  );
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <>
      <Header title={'회원가입'} />
      <Title
        title={'여행 스타일을 알려주세요!'}
        description={'성향이 맞게 (앱이름)가 분석해 드려요! (최대 5개 선택)'}
      />
      <Spacer $height={12} />
      <Row $padding={[0, 20]} $gap={16} $wrap $justifyContent={'center'}>
        {data.map((item, index) => (
          <CategoryCard
            key={index}
            category={item.category}
            Icon={item.Icon}
            selected={selectedList[index]}
            onPress={() => {
              if (category.length >= 5 && !selectedList[index]) {
                return;
              }
              const newList = [...selectedList];
              newList[index] = !newList[index];
              setSelectedList(newList);
              setCategory(
                data.filter((_, i) => newList[i]).map(i => i.category),
              );
            }}
          />
        ))}
      </Row>
      <Row $padding={[12, 0]} $justifyContent={'center'} $fill>
        <CountContainer>
          <Typography.Content $color={colors.gray.body}>
            {category.length}개 선택됨
          </Typography.Content>
        </CountContainer>
      </Row>
      <Spacer $flex={1} />
      <SingleCTA
        text={'다음'}
        onPress={() => {}}
        disabled={category.length < 1}
      />
    </>
  );
};

const CountContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.gray.solid};
`;

export default RegisterScreen;
