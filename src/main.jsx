import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Icon from './Icon/icon';
import './index.scss';
import './main.scss';

import github_icon from "./images/Icons/github_large.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <main>
        <Icon iconURL={github_icon} size="25vmin" isButton={true} link="https://www.github.com/" />
        <h1>GitHub Repository Manager</h1>
        <p>Review all information about your GitHub account!</p>
        <button>
            <p>Get Started</p>
            <a href="../Page.html"></a>
        </button>
    </main>
);

export default root;