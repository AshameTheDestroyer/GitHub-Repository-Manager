import React, { useState, useEffect } from "react";
import "./TextBox.scss";

/** An interactive text box element.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.text The text displayed in the Text Box.
 * @param {(value: String) => void} properties.setText A setter function to set the new value of the text.
 * @param {String} properties.ID The identifier of the element.
 * @param {String} properties.placeholder The text displayed in the Text Box when its empty.
 * @param {String | undefined} properties.pattern The pattern that must be followed in the Text Box.
 * @param {Boolean} properties.required Determines whether or not the Text Box is required to be filled.
 * @param {React.FormEventHandler<HTMLInputElement>} properties.onChange A callback function that's called whenever
 * the value of the Text Box changes.
 * @returns A new Text Box Element.
 */
export default function TextBox({
    text,
    setText,
    ID,
    placeholder,
    pattern,
    required = false,
    onChange = e => { }
}) {
    return (
        <div className="textbox">
            <input type="text"
                value={text} onChange={e => setText(_ => e.target.value)}
                id={ID} pattern={pattern}
                placeholder=" " required={required}
                onChangeCapture={onChange}
            />
            <label>{placeholder}</label>
        </div>
    );
};