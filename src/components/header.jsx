import { Link, useLocation } from 'react-router-dom';

import MobileNav from './mobileNav';
import React from 'react'
import SearchBox from './searchBox';
import { route } from '../setup/route'

export default function headers() {
    const location = useLocation();
    return (
        <header className="header">
            <div className="logo">
                <Link to={route.home}>
                    <img
                        src={'/images/logo.png'}
                        srcSet={"/images/logo@2x.png 2x"}
                        alt="logo"
                    />
                </Link>
            </div>
            <SearchBox />
            <ul className="mainNav subLine">
                <li><Link className={location.pathname === route.home ? 'active' : ''} to={route.home}>ANASAYFA</Link></li>
                <li><Link className={location.pathname === route.productCategory ? 'active' : ''} to={route.productCategory}>ÜRÜN VE HİZMETLER</Link></li>
                {/* <li><a target={"_blank"} href="https://satis.uludagenerji.net/">SATIŞ</a></li> */}
                <li><Link className={location.pathname === route.blogList ? 'active' : ''} to={route.blogList}>HABERLER</Link></li>
                <li><Link className={location.pathname === route.contact ? 'active' : ''} to={route.contact}>İLETİŞİM</Link></li>
                <li><Link className={location.pathname === route.about ? 'active' : ''} to={route.about}>HAKKIMIZDA</Link></li>
            </ul>
            <div className="lastNav subline">
                <div className="contentline">
                    <span>Panel Girişi</span>
                    <div className="links">
                        <a href="https://panel.uludagenerji.com/" rel='nofollow' target={"_blank"}>Yönetici</a>
                        <a href="https://panel.uludagenerji.com/" rel='nofollow' target={"_blank"}>Daire</a>
                    </div>
                </div>
            </div>
            <MobileNav />
        </header>
    );
}
