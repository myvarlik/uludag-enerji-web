import React from 'react'

export default function question(props) {
    const [display, setDisplay] = React.useState(false);

    return (
        <div className="itemfaq">
            <a style={{ cursor: "pointer" }} onClick={() => setDisplay(!display)}>{props.soru}</a>
            <p style={{ display: display ? "block" : "none" }}>
                {props.cevap}
            </p>
        </div>
    )
}
