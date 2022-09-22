import React from 'react'

export default function searchBox() {
    const [fasClass, setFasClass] = React.useState('fa-search');
    const [display, setDisplay] = React.useState(false);
    return (
        <>
            <div className="searchBox" onClick={(e) => {
                if (fasClass === 'fa-search') {
                    setFasClass("fa-times");
                    setDisplay(true)
                } else {
                    setFasClass("fa-search");
                    setDisplay(false)
                }
            }}>
                <i className={"fas " + fasClass}></i>
            </div>
            <div className="inputSearch" style={{ display: display ? 'block' : 'none' }}>
                <input type="text" placeholder="Arama Yapınız" />
                <button><i className="fas fa-search"></i></button>
            </div>
        </>
    )
}
