import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Home.css';

export const Home: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the movies application created for demonstration purpose.
        </p>
        <Link
          className="App-link"
          to="/movies"
        >
          Go to movies page.
        </Link>
      </header>
    </div>
  );
}
