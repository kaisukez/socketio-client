import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import reducers from './reducers';

import HomePage from './containers/HomePage';
import PlayPage from './containers/PlayPage';
import ProfilePage from './containers/ProfilePage';
import SettingPage from './containers/SettingPage';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/setting" component={SettingPage} />
        <Route path="/" component={PlayPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
