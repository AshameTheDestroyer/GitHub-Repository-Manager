import React, { useState, useEffect } from "react";
import "./LoadingIcon.scss";

/** A loading icon that appears when fetching.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.size The size of the Loading Icon.
 * @param {String} properties.colour The colour of the Loading Icon.
 * @returns A new Loading Icon Element.
 */
export default function LoadingIcon({
    size,
    colour,
}) {
    return (
        <div className="loading-icon" style={{
            "--size": size,
            "--colour": colour,
        }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};