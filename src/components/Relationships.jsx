import React from 'react';

import HTML from '../img/html.svg';
import CSS from '../img/css.svg';
import JS from '../img/javascript.svg';

const Relationships = () => {
    return (
        <section className="section section--relationships" id="relationships">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">About my relationships with web-development</h2>
                </div>
                <div className="r-items">
                    <div className="r-items__item">
                        <div className="r-item">
                            <div className="r-item__icon">
                                <HTML/>
                            </div>
                            <h3 className="r-item__title">I'm in love with HTML</h3>
                            <div className="r-item__text text">
                                <p>
                                    Hypertext Markup Language (HTML) is the standard markup language for creating
                                    web pages and web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="r-items__item">
                        <div className="r-item">
                            <div className="r-item__icon">
                                <CSS/>
                            </div>
                            <h3 className="r-item__title">CSS is my best friend</h3>
                            <div className="r-item__text text">
                                <p>
                                    Cascading Style Sheets (CSS) is&nbsp;a&nbsp;style sheet language used for
                                    describing the presentation of a document written in a markup language like
                                    HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="r-items__item">
                        <div className="r-item">
                            <div className="r-item__icon">
                                <JS/>
                            </div>
                            <h3 className="r-item__title">JavaScript is my passion</h3>
                            <div className="r-item__text text">
                                <p>
                                    JavaScript is a high-level, interpreted programming language. It is a language
                                    which is also characterized as dynamic, weakly typed, prototype-based and
                                    multi-paradigm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Relationships;
