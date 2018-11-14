import React, {Component} from 'react';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero" style={{backgroundImage: 'url(../img/bg-1.jpg)'}}>
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title">Test assignment for Frontend Developer position</h1>
                        <div className="hero__desc text">
                            <p>
                                We kindly remind you that your test assignment should be submitted as a link to
                                github/bitbucket repository. Please be patient, we consider and respond to every
                                application
                                that meets minimum requirements. We look forward to your submission. Good luck!
                            </p>
                        </div>
                        <div className="hero__btn">
                            <a href="#" className="btn btn--fill">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
