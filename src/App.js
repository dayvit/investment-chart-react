import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import InvestmentChart from './resources/Chart';
import InvestmentChoices from './resources/Order';

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise,
  thunk
)(createStore);

export default function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="App">
        <Header />
        <InvestmentChart />
        <InvestmentChoices />
        <GlobalStyle />
      </div>
    </Provider>
  );
}
