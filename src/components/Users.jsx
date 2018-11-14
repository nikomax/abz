import React, {Component} from 'react';
import User from './User.jsx';

export default class Users extends Component {
    render() {
        return (
            <section className="section section--users">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">About my relationships with web-development</h2>
                        <h5 className="section__subtitle">Attention! Sorting users by registration date</h5>
                    </div>
                    <div className="users">
                        {this.props.users.map(user => (
                            <div className="user__item">
                                <User
                                    key={user.id}
                                    photo={user.photo}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    position={user.position}
                                />
                            </div>
                        ))}
                        {this.props.moreLink ?
                            <a
                                href="java-script:void(0)"
                                className="btn"
                                onClick={this.props.onMore}
                            >
                                Show more
                            </a>
                            : null
                        }
                    </div>
                </div>
            </section>
        )
    }
}
