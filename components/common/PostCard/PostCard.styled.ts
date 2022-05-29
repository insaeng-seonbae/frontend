import styled from '@emotion/styled';
import theme from '@styles/theme';
import Image from 'next/image';

export const Styled = {
  container: styled.div`
    ${theme.responsive.mobile} {
      width: 180px;
    }
    //todo: 이미지 크기 조정
    width: 235px;
    height: 300px;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
  `,
  image: styled(Image)`
    border-radius: ${theme.borderRadius.md};
    overflow: hidden;
  `,
  hashRef: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    column-gap: 6px;
  `,
  title: styled.section`
    max-width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  content: styled.section`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
};
