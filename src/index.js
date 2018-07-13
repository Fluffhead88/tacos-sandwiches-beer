import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Taco from './components/Taco';
import Beer from './components/Beer';
import Sandwich from './components/Sandwich';
import BaseLayout from './BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route path='/taco' component={Taco}/>
      <Route path='/beer' component={Beer}/>
      <Route path='/sandwich' component={Sandwich}/>
      <Route exact path='/' component={App}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
