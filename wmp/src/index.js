import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Styled from 'styled-components'

ReactDOM.render(
  <Styled>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Styled>,
  
  document.getElementById('root')
);
