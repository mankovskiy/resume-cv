import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
`;

export const SectionTitlePoint = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.textColor};
`;

export const SectionTitleText = styled.a`
  display: block;
  margin: 0 auto;
  max-width: 571px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`;
