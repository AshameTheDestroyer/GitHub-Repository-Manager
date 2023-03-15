import React, { useState, useEffect, createContext } from "react";
import { Route } from "react-router-dom";
import RepositoryDisplayer from "../RepositoryDisplayer/RepositoryDisplayer";
import UserPicker from "../UserPicker/UserPicker";
import "./MainSection.scss";

const INITIAL_USER = {
    username: "",
    nickname: "",
    biography: "",
    photoURL: "",
    followers: [""].filter(_ => false),
    followees: [""].filter(_ => false),
    creationDate: new Date(""),
};

export const userContext = createContext({
    user: INITIAL_USER,
    setUser: (user = INITIAL_USER) => { },
});

/** The main section of the website.
 * @returns A new Main Section Element.
 */
export default function MainSection() {
    const [user, setUser] = useState(INITIAL_USER);

    return (
        <div id="main-section">
            <userContext.Provider value={{ user, setUser }}>

                <Route path="../UserPicker/UserPicker">
                    <UserPicker />
                </Route>

                <Route path="../RepositoryDisplayer/RepositoryDisplayer">
                    <RepositoryDisplayer />
                </Route>

            </userContext.Provider>
        </div>
    );
};