import styled from '@emotion/styled';
import abstract from '../../images/abstract.png';

export const Hero = styled.section`
  padding-top: 180px;
  padding-bottom: 180px;
  background-color: var(--dark-main-color);
  background-image: url(${abstract});
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const HeroWrap = styled.div`
  text-align: center;
  margin: 0 auto;

  max-width: 630px;
`;
export const HeroTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 84px;
  color: #fafafa;
`;

export const HeroName = styled.span`
  color: var(--accent-color);
`;

export const HeroBottom = styled.p`
  margin-top: 20px;
  font-weight: 500;
  color: var(--white-color);
  font-size: 18px;
  line-height: 24px;
`;

export const HeroTitleSmall = HeroTitle.withComponent('h1');

export const Button = styled.button`
  padding: 12px 28px;
  margin-top: 40px;
  min-width: 160px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--white-color);
  background-color: var(--accent-color);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const Section = styled.section`
  background-color: var(--bcg-color);
  padding-top: 75px;
  padding-bottom: 70px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
`;
export const Thumb = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  min-width: 370px;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectsWrapNname = styled.div`
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--white-color);
  padding: 15px 0 25px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #171718;
`;
