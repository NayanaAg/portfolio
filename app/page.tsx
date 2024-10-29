import React from "react";
import GlobalNav from "./components/nav";

export default function Page() {
    return <>
        <div id="container">
        <GlobalNav />
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    

                    <h1>Welcome to my website!</h1>
                    <p>This is a test to see whether I can make my way around this website with React</p>

                    <a className="btn btn-primary">Testing whether bootstrap is active</a>
                </div>
            </div>
        </div>
    
    
    </>
  }