import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter basename='/'>
      {/* si ya se cargaron las rutas, se hacen uso de ellas, sino se ovia */}
      <Routes>
          <Route path="" exact element={(<App idcontec={0} />)}/>
          <Route path="/home" exact element={(<App idcontec={0} />)}/>
          <Route path="/equipo" exact element={(<App idcontec={1} />)}/>
          <Route path="/servicios" exact element={(<App idcontec={2} />)}/>
          <Route path="/contacto" exact element={(<App idcontec={3} />)}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
