import React, {Component} from 'react';

import Man from '../img/man-mobile.svg';

export default class About extends Component {
    render() {
        return (
            <section className="section section--about">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Let's get acquainted</h2>
                    </div>
                    <div className="section__row">
                        <div className="section-col1">
                            <Man/>
                        </div>
                        <div className="section-col3">
                            <div className="text">
                                <h3>I am cool frontend developer</h3>
                                <p>
                                    When real users have a slow experience on mobile, they're much less likely to find
                                    what they are looking for or purchase from you in the future. For many sites this
                                    equates to a huge missed opportunity, especially when more than half of visits are
                                    abandoned if a mobile page takes over 3 seconds to
                                </p>
                                <p>
                                    Last week, Google Search and Ads teams announced two new speed initiatives to help
                                    improve user-experience on the web.
                                </p>
                            </div>
                            <a href="#" className="link">Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
