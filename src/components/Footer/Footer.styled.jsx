import styled from '@emotion/styled';

export const FooterStyle = styled.footer`
  padding-top: 60px;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.darkMainColor};
`;

export const FlexList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SocialsItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Link = styled.a`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
`;

export const FooterText = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
