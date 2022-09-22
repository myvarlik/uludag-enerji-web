import React, { useEffect } from 'react'

export default function overlay() {
    useEffect(() => {
        if (!import.meta.env.SSR) {
            setTimeout(() => document.getElementById('overlay-wrap').style.display = 'none', '600')
        }
    });

    return (
        <div id="overlay-wrap" className="overlay">
            <div className="overlaycont">
                <img src={"/images/loadlogo.png"} alt="overlay-logo" />
            </div>
        </div>
    )
}
