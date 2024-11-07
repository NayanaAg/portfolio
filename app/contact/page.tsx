import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav/>
            <TopButton version="btn-green"/>

            <div className="row">
                <div className="col-4">
                    <h1>reach out!</h1>
                    <p>I appreciate any and all feedback about my portfolio, whether it's deep insightful comments or just a typo that I missed. . I would love to have a quick chat, even if it’s about the most random thing!</p>
                </div>
                <div className="col-5">
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>
    
    </>
}
