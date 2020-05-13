import 'normalize.css';

import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import CarBuilder from './components/CarBuilder';
import CarModel from './components/CarModel';
import GlobalStyle from './theme/GlobalStyle';
import styled from 'styled-components';

const routes = [
  { path: '/', name: 'CarModel', Component: CarModel, exact: true },
  {
    path: '/carbuilder',
    name: 'CarBuilder',
    Component: CarBuilder,
    exact: false,
  },
];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            <Component />
          </Route>
        ))}
      </BrowserRouter>
    </>
  );
};

export default App;
