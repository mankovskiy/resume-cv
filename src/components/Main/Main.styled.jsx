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
