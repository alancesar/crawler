/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './main/components/navbar';
import Grid from './main/grid';
import Detail from './main/detail';
import Crawler from './main/crawler';
import '../node_modules/bulma/css/bulma.min.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <section className="section">
            <Switch>
              <Route path="/" exact component={Grid} />
              <Route path="/crawler" component={Crawler} />
              <Route path="/:id" component={Detail} />
            </Switch>
          </section>
        </div>
      </div>
    </BrowserRouter>
  ), document.getElementById('app'),
);
