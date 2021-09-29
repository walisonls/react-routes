import React from "react";
import { Container } from "./styles";
import arrowLeft from '../../img/arrow-left.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Container>
        <div className="header">
          <button className="btnReturn" onClick={this.goBack}>
              <img src={arrowLeft} alt="" />
          </button>
          <h2>sestradiano</h2>
        </div>
        <div className="section">
            <h1>Sobre mim</h1>
            <p>Comecei na programação com cerca de 14 anos de idade, mas comecei a me apronfundar mesmo por volta dos meus 16 anos. No inicio de tudo eu comecei com Python, sem perceber eu aprendi sobre a lógica de programação, logo depois de um tempo eu decidi tentar com desenvolvimento web criando paginas estaticas com HTML e CSS e com o tempo tive um contato com Javascpt, usei o Python como referencia e por isso não demorou pra eu pegar o jeito da coisa, o que mais me chamo a atenção no javascript é que com ele eu posso desenvolver para Web, Desktop e Mobile, alem de que eu poderia usar com ele o proprio Python em sí.</p>
            <h1>Caminho profissional</h1>
            <p>Nunca ví essa área como um trabalho, sempre gostei de criar novas coisas usando ferramentas, pois assim como muitos eu sinto como se eu mesmo tivesse um poder sobre o que eu faço totalmente, sendo assim eu investi em minha carreira, passei 4 anos estudando solo sem curso apenas com YouTube, 3 anos foi com apenas o smartphone que eu tinha, depois que eu peguei em um computador simples eu apenas passei meu aprendizado para o computador. Assim que eu conssegui um emprego que por sinal foi com Auxiliar de TI o que me animo muito, investi logo em um curso “Danki Code”, onde eu acompanho até agora, mas não apenas isso, tambem participeu de intensivões e de projetos como os da Rocketseat. Hoje conssigo criar paginas e desenvolver apps alem de criar designs seja no Figma ou no AdobeXD, tambem tive contato com o Electron (Uma biblioteca que permite criar aplicações para desktop), e assim vou seguindo a vida tentando aprender mais e mais.</p>
        </div>
      </Container>
    );
  }
}

export default About;
