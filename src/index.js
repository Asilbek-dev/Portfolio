import { Suspense } from 'react';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './FA/css/all.min.css'
import AOS from "aos";
import "aos/dist/aos.css";
import './i18next';
import { BrowserRouter } from 'react-router-dom';
AOS.init();

render(
  <Suspense fallback={(<div>loading-----</div>)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);


