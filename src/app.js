// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './sass/styles.scss';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <AppRouter/>
    </StrictMode>,
  );

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
   