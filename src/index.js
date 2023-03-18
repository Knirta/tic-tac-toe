import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './index.scss';

const currentTheme = localStorage.getItem('theme');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App currentTheme={currentTheme} />);
