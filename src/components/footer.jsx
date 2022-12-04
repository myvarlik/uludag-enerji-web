import { Link, useLocation } from 'react-router-dom';

import MailAdd from '../components/mailAdd'
import OfferAdd from '../components/offerAdd'
import React from 'react'
import { route } from '../setup/route'

export default function headers() {
    const location = useLocation();

    return (
        <>
            <div className="wline"></div>
            <MailAdd />
            <div className="wline"></div>
            <OfferAdd />
            <footer className="footer">
                <div className="container">
                    <div className="footWrap">
                        <div className="inleft">
                            <div className="logo logofooter">
                                <img
                                    src="/images/logo.png"
                                    srcSet="/images/logo@2x.png 2x"
                                    alt="logo"
                                />
                            </div>
                            <div className="minimal">
                                <div className="footerLink">
                                    <Link className={location.pathname === route.home ? 'factive' : ''} to={route.home}>ANASAYFA</Link>
                                    <Link className={location.pathname === route.about ? 'factive' : ''} to={route.about}>HAKKIMIZDA</Link>
                                    <Link className={location.pathname === route.blogList ? 'factive' : ''} to={route.blogList}>HABERLER</Link>
                                    <Link className={location.pathname === route.contact ? 'factive' : ''} to={route.contact}>İLETİŞİM</Link>
                                </div>
                                <p>ULUDAĞ ENERJİ MÜHENDİSLİK SAN. TİC. A.Ş.</p>
                                <p>
                                    ADRES: Atatürk Mahallesi Ertuğrulgazi Sk Metropol İstanbul İş Merkezi A Blok No:331 Ataşehir İstanbul
                                </p>
                                <div className="social">
                                    <a href="https://www.facebook.com/uludagenerji1" target={"_blank"}><i title='Uludağ Enerji facebook' className="fab fa-facebook-f"></i></a>
                                    {/* <a className="sactive" href="#"><i className="fab fa-twitter"></i></a> */}
                                    <a href="https://www.instagram.com/uludag.enerji" target={"_blank"}><i title='Uludağ Enerji instagram' className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="inright">
                            <p>Mail <a href="mailto:bilgi@uludagenerji.com">bilgi@uludagenerji.com</a></p>
                            <p>Telefon <span>0216 290 20 62</span></p>
                            <p className="mbn">
                                Çalışma Saatlerimiz <span>09:00 - 18:00 Pzt - Cuma</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footerBottom">www.uludagenerji.net</div>
        </>
    );
}
