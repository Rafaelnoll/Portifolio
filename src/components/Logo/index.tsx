import { ImageContainer } from "./styles";
import LogoImage from '../../assets/images/logo.png';

export default function Logo(){
  return (
    <ImageContainer>
      <img src={LogoImage} />
    </ImageContainer>
  )
}
