import React, { useContext, useState, useEffect } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { stateContext } from "../Page";
import Icon from "../Icon/Icon";
import "./Header.scss";

import github_icon from "../images/Icons/github_small.png";

/** The header of the website.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.title The text that'll be displayed on the Header.
 * @returns A new Header Element.
 */
export default function Header({ title }) {
    const { state, setState } = useContext(stateContext);

    return (
        <header>
            <HamburgerButton onClick={_ => setState({ ...state, isNaveBarShown: !state.isNaveBarShown })} />
            <div>
                <p>{title}</p>
                <Icon colour="white" iconURL={github_icon} size="5rem" isButton={true} link="https://www.github.com/" />
            </div>
        </header>
    );
};