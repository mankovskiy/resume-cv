// import './contacts.css';
// import '../../styles/style.css';
import { SectionCont } from './Contacts.styled';
import {
  SectionTitle,
  SectionTitlePoint,
  SectionTitleText,
  Container,
} from 'components/App.styled';

export const Contacts = ({ mail, tel, text }) => {
  return (
    <main>
      <SectionCont>
        <Container>
          <SectionTitle>Contacts</SectionTitle>
          <SectionTitlePoint>Location</SectionTitlePoint>
          <SectionTitleText>England, Birminghah</SectionTitleText>
          <SectionTitlePoint>WhatsApp</SectionTitlePoint>
          <SectionTitleText href={`tel:${tel}`}>{tel}</SectionTitleText>
          <SectionTitlePoint>{text}</SectionTitlePoint>
          <SectionTitleText href={`tel:${mail}`}>{mail}</SectionTitleText>
        </Container>
      </SectionCont>
    </main>
  );
};
