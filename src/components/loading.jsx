import React from 'react'

export default function loading() {
    return (
        <div id="overlay-wrap" className="overlay">
            <div className="overlaycont">
                <img src={"/images/loadlogo.png"} alt="overlay-logo" />
            </div>
        </div>
    )
}
