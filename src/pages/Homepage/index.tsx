import Navbar from "../../components/Navbar";
import { HeaderContent } from "./styles";
import TypeWriter from "../../components/TypeWriter";
import MyPhoto from '../../assets/images/me.jpeg';
import ConvertLogo from '../../assets/images/convert_logo.png';
import { Container } from "../../components/Container";
import useTranslate from "../../hooks/useTranslate";

export default function Homepage(){

  const { translate } = useTranslate();

  return (
    <header>
      <Navbar />
      <Container>
        <HeaderContent>
          <div className="header-title-container">
            <h1>{translate('Hello_My_Name_Is')}</h1>
            <h1>Rafael Noll</h1>
            <h1 className="typing-text">
              <TypeWriter text="Full-Stack Developer"/>
            </h1>
            <p className="title-description">{translate('Current_Working_In')} <a target="_blank" href="https://convertcompany.com.br/">Convert Company <img src={ConvertLogo} /></a></p>
          </div>
          <div className="header-photo-container">
            <img src={MyPhoto} />
          </div>
        </HeaderContent>
      </Container>
    </header>
  )
}
