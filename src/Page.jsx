import React, { createContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import './index.scss';
import './main.scss';
import './Page.scss';
import root from './main';
import { Route } from 'react-router-dom';

const INITIAL_STATE = {
    isNaveBarShown: true,
};

export const stateContext = createContext({
    state: INITIAL_STATE,
    setState: (state = INITIAL_STATE) => { },
});

function Page() {
    const [state, setState] = useState(INITIAL_STATE);

    return (
        <stateContext.Provider value={{ state, setState }}>
            <section>

                <Route path='/Header/Header'>
                    <Header title="GitHub Repository Manager" />
                </Route>

                <Route path='MainSection/MainSection'>
                    <MainSection />
                </Route>

            </section>
        </stateContext.Provider>
    );
}

root.render(<Page />);