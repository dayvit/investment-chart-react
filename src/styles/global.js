import { createGlobalStyle } from 'styled-components';

// import background from '';
// Roboto Font base
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #191920;
    -webkit-font-smoothing: antialiased;
  }
`;
