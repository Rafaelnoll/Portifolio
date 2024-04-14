import useTranslate from "../../hooks/useTranslate";
import Logo from "../Logo";
import { Container, NavList } from "./styles";

export default function Navbar(){

  const { translate } = useTranslate();

  return (
    <Container>
      <div className="navbar-left-content">
        <Logo />

        <NavList>
          <div className="nav-link">
            <a href="#projects">{translate('Projects')}</a>
            <div className="nav-outline"/>
          </div>
          <div className="nav-link">
            <a href="#aboutMe">{translate('About_Me')}</a>
            <div className="nav-outline"/>
          </div>
          <div className="nav-link">
            <a href="#tecnologies">{translate('Tecnologies')}</a>
            <div className="nav-outline"/>
          </div>
        </NavList>
      </div>

      <button className="nav-contact-button">
        {translate('Contact_Me')}
      </button>
    </Container>
  )
}
