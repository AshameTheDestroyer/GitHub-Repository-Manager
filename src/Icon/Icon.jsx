import React from "react";
import "./Icon.scss";

/** An icon displayer, it can be a button or a mere icon.
 * @param {Object} properties The properties of the element.
 * @param {String | undefined} properties.iconURL The URL of the image that'll be displayed in the Icon.
 * @param {String | undefined} properties.colour The colour of the Icon.
 * @param {String} properties.size The size of the Icon, (in CSS form).
 * @param {Boolean} properties.isButton Determines whether or not the Icon is a button.
 * @param {String | undefined} properties.link The link that'll be opened when the Icon is clicked.
 * @param {"_blank" | "_parent" | "_self" | "_top"} properties.targetLink Determines how the link will be opened when clicked.
 * @returns A new Icon Element.
 */
export default function Icon({
    iconURL,
    colour,
    size,
    isButton = false,
    link,
    linkTarget = "_blank",
    children,
}) {
    let style = document.body.style;
    style = {
        "--size": size,
        "--url": `url(${iconURL})`,
        "--background-colour": colour,
    };

    return isButton ?
        <button className="icon" style={style}>
            {
                link != null ?
                    <a href={link} target={linkTarget}>{children}</a> :
                    children
            }
        </button> :
        <div className="icon" style={style}>{children}</div>;
};