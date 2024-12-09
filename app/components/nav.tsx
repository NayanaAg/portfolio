import React from "react";
import Link from "next/link";

export default function GlobalNav() {
    return <>
        <div className="row g-0">
            <div className="col-12">
                <header>
                    <div id="global-nav">
                        <ul>
                            <li><Link href="/">home</Link></li>
                            <li><Link href="/projects">projects</Link></li>
                            <li><Link href="/hobbies">hobbies</Link></li>
                            <li><Link href="/contact">contact</Link></li>
                            <li><Link href="#">resume</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    </>
}