import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import { useRouter } from 'next/router';

const SignInModal = () => {
  const router = useRouter();
  const KAKAO_AUTH = process.env.NEXT_PUBLIC_KAKAO_AUTH;
  const GOOGLE_AUTH = process.env.NEXT_PUBLIC_GOOGLE_AUTH;

  return (
    <Box width={450} height={500}>
      <Wrapper flexDirection={'column'} alignItems="flex-start">
        <Title size="h1" color={'black'} align="left">
          🌳 그루터기
        </Title>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
        <Typography size={'lg'} weight={'LIGHT'} color={'darkgray'}>
          인생선배를 찾는 지름길,
        </Typography>
        <Typography size={'lg'} weight={'LIGHT'} color={'darkgray'}>
          그루터기
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ gap: 20 }}>
        <Button
          icon={'/logos/kakao_logo.png'}
          color={'kakao'}
          fontColor={'black'}
          name={'카카오로 1초만에 시작하기'}
          size={'lg'}
          onClick={() => {
            location.href = KAKAO_AUTH || '/';
          }}
        />
        <Button
          icon={'/logos/google_logo.png'}
          color={'white'}
          fontColor={'black'}
          borderColor={'lightgray'}
          name={'구글계정으로 시작하기'}
          size={'lg'}
          onClick={() => {
            location.href = GOOGLE_AUTH || '/';
          }}
        />
        <Button
          color={'lightgray'}
          fontColor={'darkgray'}
          name={'이메일로 시작하기'}
          size={'lg'}
          onClick={() => router.push('/auth/signin')}
        />
      </Wrapper>
    </Box>
  );
};
export default SignInModal;
