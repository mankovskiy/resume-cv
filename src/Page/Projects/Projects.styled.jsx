import styled from '@emotion/styled';
// import { projects } from 'dataProjects/projects';

export const ProjectsSection = styled.section`
  padding-top: 140px;
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
  @media screen and (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 30px;
  }
`;
