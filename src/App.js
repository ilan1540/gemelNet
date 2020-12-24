import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './componants/redux/store';
import store from './componants/redux/store';
import Routes from './componants/routes/Routes';
import { Header } from './componants/layout/Header';
import { Footer } from './componants/layout/Footer';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <div id="content">
      <BrowserRouter>
      <Header id="header" />
      <Routes />
      <Footer id="footer" />
      </BrowserRouter>
      
    </div>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
