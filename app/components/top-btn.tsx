import React from "react";

export default function TopButton(props) {
    return <>
        <a className="btn btn-secondary" href="#" id={props.version} style={{
            position: "fixed",
            bottom: "var(--sm-space)",
            left: "var(--sm-space)",
            border: "none",
            fontWeight: "var(--mdbold)",
            transition: "var(--transition-time)"
        }}>back to top</a>
    </>
}