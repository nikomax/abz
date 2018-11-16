import React, {Component} from 'react';

import './_user.sass';

export default class User extends Component {
    render() {
        const {photo, name, email, phone, position} = this.props;
        return (
            <div className="user">
                <div className="user__avatar">
                    <img src={photo} alt={name}/>
                </div>
                <div className="user__content">
                    <div className="user__name">
                        {name}
                    </div>
                    <div className="user__info">
                        <p>{position}</p>
                        <a href={`mailto:${email}`}>{email}</a>
                        <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                </div>
            </div>
        )
    }
}

