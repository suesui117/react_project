import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// in this class, we define one compnenet per file, and export default

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/react_project'>
    <App />
    </BrowserRouter> 
  </React.StrictMode>
);

// Reference: https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages

// App this is the function, a component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();