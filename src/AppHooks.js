import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorHooks from './components/CalculatorHooks';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';
import './scss/App.scss';

const AppHooks = () => {
  const [theme, setTheme] = useState('Light');
  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark');
    } else {
      setTheme('Light');
    }
  };

  return (
    <div className="App">
      <Header handleThemeProps={handleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorHooks />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default AppHooks;
