import React from "react";
import GlobalStyle from "./styles/global";
import { MenuBar } from "./styles/menu";
import { Header } from "./styles/header";
import { Footer } from "./styles/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//pages
import About from "./pages/about/index";
import Works from "./pages/works/index";
import Portifolio from "./pages/portifolio/index";
import Links from "./pages/links/index";
//imagesLinks
import imgAbout from './img/about.png';
import imgWorks from './img/works.png';
import imgPortifolio from './img/portifolio.png';
import imgLinks from './img/links.png';
import pp from './img/pp.jpg';

function App(props) {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header>
          <div>
            <hgroup>
              <h1>Walison Lima</h1>
              <h3>sestradiano</h3>
            </hgroup>
            <img src={pp} alt="" />
          </div>
        </Header>
          <MenuBar>
            <textgroup>
              <h4>Não importa que você vá devagar, contanto que você não pare.</h4>
              <p>“Confúcio”</p>
            </textgroup>

            <div className="ul">
              <Link className="li" to="/about">
                <img src={imgAbout} alt="" />
                <a>About</a>
              </Link>
              <Link className="li" to="/works">
                <img src={imgWorks} alt="" />
                <a>Works</a>
              </Link>
              <Link className="li" to="/portifolio">
                <img src={imgPortifolio} alt="" />
                <a>Portifolio</a>
              </Link>
              <Link className="li" to="/links">
                <img src={imgLinks} alt="" />
                <a>Links</a>
              </Link>
            </div>
          </MenuBar>
          <Footer>
            <p>Create Page By Walison Lima</p>
            <p>In 2021 a 2021</p>
          </Footer>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/portifolio" component={Portifolio} />
          <Route path="/links" component={Links} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
