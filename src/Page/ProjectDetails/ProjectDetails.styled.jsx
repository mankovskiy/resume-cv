import styled from '@emotion/styled';

export const ProjectSection = styled.section`
  background-color: var(--bcg-color);
  padding-top: 75px;
  padding-bottom: 70px;
`;

export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectDitalsCover = styled.img`
  max-width: 100%;
  margin-top: 40px;
  box-shadow: (0px 5px 35px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const ProjectDitalesDescript = styled.div`
  margin: 40px 30px;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
`;

export const ButonOutline = styled.a`
  margin: 0 auto;
  color: var(--dark-bg-color-text);
  font-weight: 500;
  font-size: 16px;
  line-height: 0.15;
  border: 1px solid #000000;
  border-radius: 5px;
  max-width: 169px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  background-color: var(--white-color);
  padding: 12px 20px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
