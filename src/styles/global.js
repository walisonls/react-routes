import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      html, body, #root {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`;
