import React, {Component} from 'react';

export default class NavLink extends Component
{
    render () {
        return (
            <a href={this.props.href}>{this.props.title}</a>
        )
    }
}
