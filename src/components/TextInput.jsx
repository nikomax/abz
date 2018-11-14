import React, {Component} from 'react';

export default class TextInput extends Component
{
    render () {
        const {label, type, placeholder, id, name, onInput, value} = this.props;
        return (
            <div className="input">
                <label
                    for={id}
                    className="input__label"
                >
                    {label}
                </label>
                <input
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    onInput={onInput}
                    value={value}
                />
            </div>
        )
    }
}
