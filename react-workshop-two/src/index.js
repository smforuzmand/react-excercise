import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const welcomeMessage = createElement("h2", { style: { color: "red" } }, Text = "hello from react element")






root.render(welcomeMessage);

