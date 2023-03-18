import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Icon from './Icon/Icon';
import Page from './Page/Page';
import './main.scss';
import './index.scss';

import github_icon from "./images/Icons/github_large.png";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="page" element={<Page />} />
        </Routes>
    </BrowserRouter>
);

function Main() {
    return (
        <main>
            <div>
                <Icon iconURL={github_icon} size="30vmin" isButton={true} link="https://www.github.com/" />
                <h1>GitHub Repository Manager</h1>
            </div>
            <p>Review all information about your GitHub account!</p>
            <button>
                <p>Get Started</p>
                <Link to="page"></Link>
            </button>
        </main>
    );
}