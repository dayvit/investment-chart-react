import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body {
    background: #f7f3f3;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .hide {
    display: none;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin: 18px auto;
    justify-content:center;
  }
`;
