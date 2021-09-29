import React from "react";
import { Container } from "./styles";
import arrowLeft from "../../img/arrow-left.png";

class Links extends React.Component {
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
          <h1>Links de projetos e documentações:</h1>
          <div className="list-links">
            <div className="link">
              <strong>Github:</strong>
              <a href="https://github.com/SkyWals">https://github.com/SkyWals</a>
            </div>
            <div className="link">
              <strong>Linkedin:</strong>
              <a href="https://www.linkedin.com/in/walison-lima-a87213218/">https://www.linkedin.com/in/walison-lima-a87213218/</a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Links;
