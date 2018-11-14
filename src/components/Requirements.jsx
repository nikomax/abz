import React, {Component} from 'react';
import ManLaptop from "../img/man-laptop-v2.svg";

export default class Requirements extends Component {
    render() {
        return (
            <section className="section section--requirements" style={{backgroundImage: 'url(../img/bg-2.jpg)'}}>
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">General requirements for the test task</h2>
                    </div>
                    <div className="section__row">
                        <div className="section-col2">
                            <div className="text">
                                <p>
                                    Users want to find answers to their questions quickly and data shows that people
                                    really care about how quickly their pages load. The Search team announced speed
                                    would be a ranking signal for desktop searches in 2010 and as of this month (July
                                    2018), page speed will be a ranking factor for mobile searches too.
                                </p>
                                <p>
                                    If you're a developer working on a site, now is a good time to evaluate your
                                    performance using our speed tools. Think about how performance affects the user
                                    experience of your pages and consider measuring a variety of real-world user-centric
                                    performance metrics.
                                </p>
                                <p>
                                    Are you shipping too much JavaScript? Too many images? Images and JavaScript are the
                                    most significant contributors to the page weight that affect page load time based on
                                    data from HTTP Archive and the Chrome User Experience Report - our public dataset
                                    for key UX metrics as experienced by Chrome users under real-world conditions.
                                </p>
                            </div>
                        </div>
                        <div className="section-col2">
                            <ManLaptop/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
