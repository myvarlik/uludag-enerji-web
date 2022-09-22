import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader';
import { route } from '../setup/route'

export default function ProductCategory(props) {
    const { productCategory } = props;
    if (!productCategory) {
        return <Loading />;
    }

    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.productCategory });

    function getListe() {
        let res = [];
        for (const item of productCategory) {
            res.push(
                <Link key={'urun-category' + item.id} className="prodLisItem" to={route.productList(item.slug)}>
                    <img src={"https://image.uludagenerji.net" + item.resim} alt={item.adi} />
                    <span className="prodSpan"> <span className="prodTitle">{item.adi}</span>
                        <span className="subspan">{item.aciklama}</span>
                        <span className="spanright">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </span>
                </Link>
            );
        }

        return res;
    }

    return (
        <>
            <Helmet title='Uludağ Enerji Ürünler ve Hizmetler'>
                <meta name='description' content={""} />
                <link rel='canonical' href={route.canonical(route.productCategory)} />
            </Helmet>
            <SubHeader title="Ürünler ve Hizmetler" backgroundImage="/images/urunbg.png" breadcrumbList={[{ key: 1, title: 'Ürünler ve Hizmetler', route: route.productCategory, class: 'nowhere' }]} />
            <div className="wline"></div>
            <div className="container">
                <p className="prodP">
                    Şirketimiz bünyesinde üretilen RF 868 Mhz uzaktan okuma sistemleri ile piyasada bulunan radyo frekanslı Qundis, Techem, Engelmann, Danfoss, Daf Enerji ve diğer marka kalorimetre, ısı pay ölçer ve su sayaçlarını, GSM hatları veya Wİ-Fİ üzerinden her gün otomatik olarak okuyabiliyoruz. Bu cihazları Almanya'dan ithal ettiğimiz Radiocraft çiplerle, güçlü bir alıcı olarak programlayıp panel.uludagenerji.com adresinde bulunan web panelimizdeki endeksleri devamlı uzaktan okuma sistemiyle güncelleyebiliyoruz. MBus kalorimetre ve sıcak su sayaçlarını uzaktan okuduğumuz sistem de aynı şekilde kendi üretimimizdir. Türk malı Atlas, Calmet, Keskar, Tebaş, Cem, Baylan veya Alman malı Qundis, Techem, Danfoss gibi bütün M-Bus kalorimetre ve su sayaçları uzaktan her gün otomatik olarak okunabilmektedir. Eski Techem ve diğer marka ısı pay ölçerler yeni nesil Qundis ısı pay ölçerlerle değiştirilmektedir. Siemens ve Honeywell, ısı pay ölçer üretiminde, üretim merkezi olarak Qundis firmasını tercih etmiştir. Ayrca garanti süresi 5 sene olan Qundis kalorimetre, ısı pay ölçer ve su sayacı satışımız mevcuttur.
                </p>
                <div className="wline"></div>
                <div className="prodList">
                    {getListe()}
                </div>
            </div>
        </>
    )
}
