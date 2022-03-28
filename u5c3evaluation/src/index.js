import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TextContext } from './Components/TextContext';

ReactDOM.render(
  <React.StrictMode>
    <TextContext>
      <App />
    </TextContext>
  </React.StrictMode>,
  document.getElementById('root')
);


