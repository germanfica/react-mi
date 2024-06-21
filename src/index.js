// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Clear the existing HTML content
// document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);