import Logo from "../Logo";
import { Container, NavList } from "./styles";

export default function Navbar(){
  return (
    <Container>
      <div className="navbar-left-content">
        <Logo />

        <NavList>
          <div className="nav-link">
            <a>Projetos</a>
            <div className="nav-outline"/>
          </div>
          <div className="nav-link">
            <a>Sobre Mim</a>
            <div className="nav-outline"/>
          </div>
          <div className="nav-link">
            <a>Tecnologias</a>
            <div className="nav-outline"/>
          </div>
        </NavList>
      </div>

      <button className="nav-contact-button">
        Entre em Contato
      </button>
    </Container>
  )
}
