import styled from '@emotion/styled';

export const ProjectsSection = styled.section`
  padding-top: 75px;
  padding-bottom: 70px;
`;

export const ProjectsTitle = styled.h2`
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
`;

export const List = styled.ul`
  /* display: block; */

  @media screen and (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 30px;
  }
`;
