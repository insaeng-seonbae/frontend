import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import Styled from './ReviewList.style';

export type Item = {
  src: string;
  name: string;
  time: string;
  text: string;
};

export interface ReviewListProps {
  reviewList: Item[];
}

const ReviewItems: React.FC<ReviewListProps> = ({ reviewList }) => {
  let idx = 0;
  if (reviewList.length > 0)
    return (
      <>
        {reviewList.map(({ src, name, time, text }: Item) => (
          <Wrapper key={idx++} flexDirection={'column'} padding={{ paddingTop: '26px' }}>
            <Wrapper flexDirection={'row'} gap={{ gap: 12 }} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <Styled.profileImg src={src} />
              <Wrapper flexDirection={'column'} justifyContent={'space-around'}>
                <Typography size={'sm'} color={'black'} weight={'BOLD'}>
                  {name}
                </Typography>
                <Typography size={'xs'} color={'black'}>
                  {time}
                </Typography>
              </Wrapper>
            </Wrapper>
            <Wrapper flexDirection={'column'} margin={{ marginTop: '14px' }}>
              <Typography size={'md'} color={'black'}>
                {text}
              </Typography>
            </Wrapper>
          </Wrapper>
        ))}
      </>
    );
  else
    return (
      <Wrapper flexDirection={'column'} alignItems={'center'} padding={{ paddingTop: '26px' }}>
        <Typography size={'lg'} color={'black'}>
          아직 작성된 리뷰가 없어요 😢
        </Typography>
      </Wrapper>
    );
};

const ReviewList: React.FC<ReviewListProps> = ({ ...reviewList }) => {
  return (
    <Styled.container>
      <Typography weight="BOLD" size={'lg'} color={'black'}>
        밥약 리뷰
      </Typography>
      <Styled.hr />
      <ReviewItems {...reviewList} />
    </Styled.container>
  );
};

export default ReviewList;
