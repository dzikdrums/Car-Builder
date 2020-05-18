import 'normalize.css';

import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import CarBuilder from './components/CarBuilder';
import CarModel from './components/CarModel';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { debounce } from './utils';
import gsap from 'gsap';
import { store } from './redux/store';

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
  // prevents flashing
  gsap.to('body', 0, { css: { visibility: 'visible' } });
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    //Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            <Component />
          </Route>
        ))}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
