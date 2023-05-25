import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import {
  FooterStyle,
  FlexList,
  SocialsItem,
  Link,
  FooterText,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <FlexList>
        <SocialsItem>
          <Link href="{instagram}">
            <AiOutlineInstagram size={38} />
          </Link>
        </SocialsItem>
        <SocialsItem>
          <Link href="{}">
            <AiFillTwitterCircle size={38} />
          </Link>
        </SocialsItem>
        <SocialsItem>
          <Link href="{}">
            <AiFillLinkedin size={38} />
          </Link>
        </SocialsItem>
        <SocialsItem>
          <Link href="{}">
            <AiFillGithub size={38} />
          </Link>
        </SocialsItem>
      </FlexList>
      <FooterText>© 2023 frontend-dev.com</FooterText>
    </FooterStyle>
  );
};
