import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-blue" />

            <div className="row" id="hero-banner">
                <div className="col-5 offset-1 g-5">
                    <h1>reach out!</h1>
                    <p>I appreciate any and all feedback about my portfolio, whether it's deep insightful comments or just a typo that I missed. . I would love to have a quick chat, even if it’s about the most random thing!</p>
                </div>
                <div className="col-5">
                    <form id="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" className="form-control" id="name" aria-describedby="Enter your name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address: </label>
                            <input type="email" className="form-control" id="email" aria-describedby="Enter your email address" />
                            <small id="email" className="form-text text-muted">I'll never share your email with anyone else. </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Put any questions and comments here!</label>
                            <textarea className="form-control" id="message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" id="submit-btn">Send</button>

                    </form>
                </div>
            </div>
        </div>

    </>
}
