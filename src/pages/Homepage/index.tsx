import Navbar from "../../components/Navbar";
import { HeaderContent } from "./styles";
import TypeWriter from "../../components/TypeWriter";

export default function Homepage(){
  return (
    <header>
      <Navbar />
      <HeaderContent>
        <div className="header-title-container">
          <div>
            <h1>Olá, meu nome é</h1>
          </div>
          <h1>Rafael Noll</h1>
          <h1 className="typing-text">
            <TypeWriter text="Full-Stack Developer"/>
          </h1>
        </div>
      </HeaderContent>
    </header>
  )
}
