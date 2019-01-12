import React from 'react';
import { formatDateStr } from './tools/for-time';
import './main.css';
import getPollNetwork from './apis/survey_poll/index';
import logo from './assets/index/images/logo.svg';
import abai from './assets/index/images/0.png';
import App2 from './module2';
formatDateStr();
window.onpopstate = function() {
  alert(0);
};
const a = 'dfd df dfsdfrsfsdfsfs sdf wr';
async function test() {
  const result = await getPollNetwork().getCurrentPoll();
  console.log(result instanceof Error);
}
try {
  test();
} catch (error) {
  console.log(error, 'dfgdg');
}
const App = () => {
  return (
    <div>
      <img src={abai} className="App-logo" alt="lll" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>React here!</p>
      <App2 />
    </div>
  );
};
export default App;
