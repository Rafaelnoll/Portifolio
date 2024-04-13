import Navbar from "../../components/Navbar";
import { HeaderContent } from "./styles";
import TypeWriter from "../../components/TypeWriter";
import MyPhoto from '../../assets/images/me.jpeg';
import ConvertLogo from '../../assets/images/convert_logo.png';

export default function Homepage(){
  return (
    <header>
      <Navbar />
      <HeaderContent>
        <div className="header-title-container">
          <h1>Olá, meu nome é</h1>
          <h1>Rafael Noll</h1>
          <h1 className="typing-text">
            <TypeWriter text="Full-Stack Developer"/>
          </h1>
          <p className="title-description">Atualmente trabalhando como Dev. Full Stack na <a target="_blank" href="https://convertcompany.com.br/">Convert Company <img src={ConvertLogo} /></a></p>
        </div>
        <div className="header-photo-container">
          <img src={MyPhoto} />
        </div>
      </HeaderContent>
    </header>
  )
}
