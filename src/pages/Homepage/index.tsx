import Navbar from "../../components/Navbar";
import { HeaderContent, AboutMeContainer, TecnologiesContainer, MainContent, ProjectsContainer, FooterContainer } from "./styles";
import TypeWriter from "../../components/TypeWriter";
import MyPhoto from '../../assets/images/me.jpeg';
import ConvertLogo from '../../assets/images/convert_logo.png';
import { Container } from "../../components/Container";
import useTranslate from "../../hooks/useTranslate";

// Tec Logos
import JSLogo from '../../assets/images/js.png';
import ReactLogo from '../../assets/images/React.png';
import NodeLogo from '../../assets/images/node-js.png';
import LinuxLogo from '../../assets/images/linux.png';
import GitLogo from '../../assets/images/Git.png';
import SQLLogo from '../../assets/images/Sql_logo.png';
import MongoDbLogo from '../../assets/images/mongo.png';

// Projects Images
import MyKanban from '../../assets/images/MyKanban.png';
import FreePlay from '../../assets/images/FreePlay.png';

// Social Links
import LinkdinLogo from '../../assets/images/linkedin.svg';
import GithubLogo from '../../assets/images/github.svg';
import YoutubeLogo from '../../assets/images/youtube.svg';

export default function Homepage(){

  const { translate } = useTranslate();

  return (
    <>
      <header>
        <Container>
          <Navbar />
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
      <main>
          <MainContent>
            <AboutMeContainer id="aboutMe">
            <Container>
              <h2>{translate("About_Me")}</h2>

              <div className="about-me-text">
                <p>👋 Muito prazer, meu nome é Rafael Noll. Atualmente, tenho 19 anos e estou sempre em busca de me aperfeiçoar e ganhar mais experiência.</p>
                <p>💡 Sou uma pessoa muito curiosa quando o assunto é tecnologia. Comecei a estudar programação no início de 2021 em um projeto chamado #TeuFuturo. Desde então, venho me aprofundando em tecnologias como JavaScript/TypeScript, React, React Native e Node.</p>
                <p>🚀 Além do Front-End, também possuo conhecimento em Back-End utilizando Node.js e banco de dados, entre outras tecnologias. Estou sempre em busca de mais experiências e conhecimentos.</p>
              </div>
            </Container>
            </AboutMeContainer>
            <TecnologiesContainer id="tecnologies">
              <Container>
                <h2>{translate("Tecnologies")}</h2>

                <div className="tec-container">
                  <div className="tec">
                    <img src={JSLogo} />
                    <strong>Javascript</strong>
                  </div>
                  <div className="tec">
                    <img src={ReactLogo} />
                    <strong>React.js</strong>
                  </div>
                  <div className="tec">
                    <img src={NodeLogo} />
                    <strong>Node.js</strong>
                  </div>
                  <div className="tec">
                    <img src={LinuxLogo} />
                    <strong>Linux</strong>
                  </div>
                  <div className="tec">
                    <img src={GitLogo} />
                    <strong>Git</strong>
                  </div>
                  <div className="tec">
                    <img src={SQLLogo} />
                    <strong>SQL</strong>
                  </div>
                  <div className="tec">
                    <img src={MongoDbLogo} />
                    <strong>NoSQL</strong>
                  </div>
                </div>
              </Container>
            </TecnologiesContainer>
            <ProjectsContainer id="projects">
              <Container>
                <h2>{translate("Projects")}</h2>

                <div className="projects-list">
                    <div className="project-card">
                      <a href="https://github.com/Rafaelnoll/kanban_front_end" target="_blank">
                        <img src={MyKanban} />
                        <div className="project-desc">
                          <strong>My Kanban</strong>
                          <span>Página de gerenciamento de atividades no estilo Kanban</span>
                        </div>
                      </a>
                    </div>

                    <div className="project-card">
                      <a href="https://play-free-jet.vercel.app/" target="_blank">
                        <img src={FreePlay} />
                        <div className="project-desc">
                          <strong>Free Play</strong>
                          <span>Site para mostrar os principais jogos grátis do momento</span>
                        </div>
                        </a>
                    </div>
                </div>
              </Container>
            </ProjectsContainer>
          </MainContent>
      </main>
      <footer>
          <FooterContainer>
            <Container>
                 <div className="flex-container">
                    <span>Feito por <a href="https://br.linkedin.com/in/rafael-noll-ds" target="_blank">Rafael Noll</a></span>

                    <div className="social-links">
                        <a target="_blank" href="https://br.linkedin.com/in/rafael-noll-ds" title="LinkedIn"><img src={LinkdinLogo}/></a>
                        <a target="_blank" href="https://github.com/Rafaelnoll" title="Github"><img src={GithubLogo}/></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCJTwVoFy1uTfY20wVtenvOg" title="Youtube"><img src={YoutubeLogo}/></a>
                    </div>
                 </div>
            </Container>
          </FooterContainer>
      </footer>
    </>
  )
}
