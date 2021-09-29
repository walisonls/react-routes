import React from "react";
import { Container } from "./styles";
import arrowLeft from '../../img/arrow-left.png';

class Portifolio extends React.Component {
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
            <h1>Portifolio</h1>
            <div className="uniProjeto">
              <strong>Iris - Assistente pessoal:</strong><br/>
              <a href="https://github.com/SkyWals/Assistente-Python">
              https://github.com/SkyWals/Assistente-Python
              </a>
              <p>Um pequeno projeto para entender mais sobre a entrada e saida de comandos de voz alem da execução de tarefas em Python.</p>
            </div>
        </div>
      </Container>
    );
  }
}

export default Portifolio;
