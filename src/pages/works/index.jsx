import React from "react";
import { Container } from "./styles";
import arrowLeft from '../../img/arrow-left.png';

class Works extends React.Component {
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
            <h1>Works</h1>
        </div>
      </Container>
    );
  }
}

export default Works;
