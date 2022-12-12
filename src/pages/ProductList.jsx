import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader';
import { htmlToText } from 'html-to-text';
import { route } from '../setup/route'

export default function ProductList(props) {
  const { productList } = props;
  if (!productList) {
    return <Loading />;
  }

  ReactGA.initialize('G-6JJZSC5FD7');
  ReactGA.send({ hitType: 'pageview', page: route.productList(productList?.urunKategori.slug) });

  function getListe() {
    let res = [];
    for (const item of productList.urunListe) {
      res.push(
        <Link key={item.id} className="prodLisItem" to={route.productDetail(item.slug)}>
          <img src={"https://file.uludagenerji.net" + item.thumb} height={500} width={500} alt={item.baslik} />
          <span className="prodSpan"> <span className="prodTitle">{item.baslik}</span>
            <span className="subspan">{htmlToText(item.icerik) + "..."}</span>
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
      <Helmet title={'Uludağ Enerji ' + productList?.urunKategori?.adi} >
        <meta name='description' content={htmlToText(productList?.urunKategori.meta)} />
        <link rel='canonical' href={route.canonical(route.productList(productList?.urunKategori.slug))} />
      </Helmet>
      <SubHeader title="Ürünler" backgroundImage="/images/urunbg.png" breadcrumbList={[
        { key: 1, title: 'Ürünler ve Hizmetler', route: route.productCategory, class: '' },
        { key: 1, title: productList?.urunKategori?.adi, route: route.productList(productList?.urunKategori?.slug), class: 'nowhere' }]} />
      <div className="wline"></div>
      <div className="container">
        <p className="prodP">{productList?.urunKategori?.aciklama}</p>
        <div className="wline"></div>
        <div className="prodList">{getListe()}</div>
      </div>
    </>
  )
}
