import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //renderizando o APP.js =>princpal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App /> 
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//React.StrictMode => ajuda em ambiente de desenvolvimento retornando possíveis mensagens de erro

//index.js renderiza o componente principal do React => 'App.js'