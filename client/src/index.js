import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ContextProvider } from './context/Context';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  rootElement
);
