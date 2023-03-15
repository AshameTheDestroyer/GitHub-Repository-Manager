import React from "react";
import "./HamburgerButton.scss";

/** A button that looks just like a hamburger.
 * @param {Object} properties The proerties of the element.
 * @param {(e: MouseEvent) => void} properties.onClick A callback that gets called whenever the button is clicked.
 * @returns A new Hamburger Button Element.
 */
export default function HamburgerButton({
    onClick
}) {
    return (
        <button className="hamburger-button" onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};