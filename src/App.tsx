import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';

const App = () => {
  const num: number = 10;
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleText = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1 className="title">Webpack</h1>
      <Button toggle={toggleText}>{toggle ? 'Hide' : 'Show'}</Button>
      {toggle && (
        <>
          <p>Simple Webpack boilerplate for React</p>
          <span>Packages:</span>
          <ul>
            <li>webpack</li>
            <li>webpack-cli</li>
            <li>webpack-dev-server</li>
            <li>html-webpack-plugin</li>
            <li>mini-css-extract-plugin</li>
            <li>@babel/core</li>
            <li>@babel/preset-env</li>
            <li>@babel/preset-react</li>
            <li>babel-loader</li>
            <li>css-loader</li>
            <li>react</li>
            <li>react-dom</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
