import { Link, useHistory, useLocation } from 'react-router-dom';

import React from 'react'
import { route } from '../setup/route'

export default function mobileNav() {
    const location = useLocation();
    const history = useHistory();
    const [display, setDisplay] = React.useState(false);

    function handleClick(route) {
        history.push(route)
        setDisplay(false)
    }

    return (
        <>
            <div className="mainMobileNav" style={{ display: display ? 'block' : 'none' }}>
                <ul>
                    <li><a className={location.pathname === route.home ? 'active' : ''} onClick={() => { handleClick(route.home) }}>ANASAYFA</a></li>
                    <li><a className={location.pathname === route.productCategory ? 'active' : ''} onClick={() => { handleClick(route.productCategory) }}>ÜRÜN VE HİZMETLER</a></li>
                    {/* <li><a target={"_blank"} href="https://satis.uludagenerji.net/">SATIŞ</a></li> */}
                    <li><a className={location.pathname === route.blogList ? 'active' : ''} onClick={() => { handleClick(route.blogList) }}>HABERLER</a></li>
                    <li><a className={location.pathname === route.contact ? 'active' : ''} onClick={() => { handleClick(route.contact) }}>İLETİŞİM</a></li>
                    <li><a className={location.pathname === route.about ? 'active' : ''} onClick={() => { handleClick(route.about) }}>HAKKIMIZDA</a></li>

                    <li><a className="y1" href="https://panel.uludagenerji.com/" target={"_blank"}>Yönetici Girişi</a></li>
                    <li><a className="y2" href="https://panel.uludagenerji.com/" target={"_blank"}>Daire Girişi</a></li>
                </ul>
            </div>
            <div onClick={() => { setDisplay(!display) }} id="mobnav"><i className="fas fa-bars"></i></div>
        </>
    )
}
