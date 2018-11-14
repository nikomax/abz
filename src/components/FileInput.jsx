import React, {Component} from 'react';

export default class FileInput extends Component
{
    render () {
        const {info, onChange, value} = this.props;
        return (
            <div className="file">
                <label
                    for="avatar"
                    className="file__label"
                >
                    bla
                </label>
                <input type="file"
                       id="avatar"
                       name="avatar"
                       accept="image/jpeg"
                       onChange={onChange}
                       value={value}
                />
                {info ?
                    <span className="file__info">
                        {info}
                    </span>
                    : null
                }

            </div>
        )
    }
}
