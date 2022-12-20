import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader';
import axios from 'axios';
import { htmlToText } from 'html-to-text';
import { route } from '../setup/route'

export default function ProductDetail(props) {
  const { productDetail } = props;
  if (!productDetail) {
    return <Loading />;
  }

  ReactGA.initialize('G-6JJZSC5FD7');
  ReactGA.send({ hitType: 'pageview', page: route.productDetail(productDetail?.urunDetay.slug) });

  function download(file) {
    let fileEx = file.split("/");
    axios({
      url: "https://file.uludagenerji.net" + file,
      method: 'GET',
      responseType: 'blob'
    })
      .then((response) => {
        const url = window.URL
          .createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileEx[fileEx.length - 1]);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
  }

  function getListe() {
    let res = [];
    for (const item of productDetail?.randomUrunTop3) {
      res.push(
        <Link key={item.id} className="prodLisItem" to={route.productDetail(item.slug)}>
          <img src={"https://file.uludagenerji.net" + item.thumb} alt={item.baslik} />
          <span className="prodSpan">
            <span className="prodTitle">
              {item.baslik}
            </span>
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
      <Helmet title={productDetail?.urunDetay.baslik + " - Uludağ Enerji"} >
        <meta property='og:title' content={productDetail?.urunDetay?.baslik} />
        <meta property='og:description' content={productDetail?.urunDetay?.meta} />
        <meta property='og:image' content={"https://file.uludagenerji.net" + productDetail?.urunDetay?.resim} />
        <meta name='description' content={htmlToText(productDetail?.urunDetay.meta)} />
        <link rel='canonical' href={route.canonical(route.productDetail(productDetail?.urunDetay.slug))} />
      </Helmet>
      <SubHeader title="Ürünler" backgroundImage="/images/urunbg.png"
        breadcrumbList={[
          { key: 1, title: 'Ürünler ve Hizmetler', route: route.productCategory, class: '' },
          { key: 2, title: productDetail?.urunDetay.kategori, route: route.productList(productDetail?.urunDetay.kategoriSlug), class: '' },
          { key: 3, title: productDetail?.urunDetay.baslik, route: '', class: 'nowhere' }
        ]} />
      <div className="wline"></div>
      <div className="container">
        <div className="singleProd">
          <div className="spLeft">
            <div className="spBox spFirst">
              <div className="spIcon"><i className="fas fa-bolt"></i></div>
              <a style={{ cursor: "pointer" }} onClick={() => { download(productDetail?.urunDetay.brosur) }}>
                BU ÜRÜNÜN BROŞÜRÜNÜ İNDİR
              </a>
            </div>
          </div>
          <div className="spMiddle">
            <a href="#">
              <img src={"https://file.uludagenerji.net" + productDetail?.urunDetay.resim} alt={productDetail?.urunDetay.baslik} />
            </a>
          </div>
          <div className="spRight">
            <div className="spBox spLast">
              <div className="spIcon"><i className="far fa-paper-plane"></i></div>
              <a target={"_blank"} href={route.contact}>BU ÜRÜNÜ SATIN ALINALMAK İÇİN İLETİŞİME GEÇİN</a>
            </div>
          </div>
          <div className="mobileX">
            <div className="spLeft">
              <div className="spBox spFirst">
                <div className="spIcon"><i className="fas fa-bolt"></i></div>
                <a style={{ cursor: "pointer" }} onClick={() => { download(productDetail?.urunDetay.brosur) }}>
                  BROŞÜRÜNÜ İNDİR
                </a>
              </div>
            </div>
            <div className="spRight">
              <div className="spBox spLast">
                <div className="spIcon"><i className="far fa-paper-plane"></i></div>
                <a target={"_blank"} href={route.contact}>BU ÜRÜNÜ SATIN ALINALMAK İÇİN İLETİŞİME GEÇİN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wline"></div>
      <div className="line"></div>
      <div className="wline"></div>
      <div className="container">
        <div className="tabWrap">
          <div className="tabHead">
            <a data-id="tab1" className="tActive">Ürün Detayları</a>
          </div>
          <div id="tab1" className="tabItem" style={{ display: "block" }}>
            <p dangerouslySetInnerHTML={{ __html: productDetail?.urunDetay.icerik }}></p>
          </div>
        </div>
      </div>
      <div className="wline"></div>
      <div className="line"></div>
      <div className="wline"></div>

      <div className="container">
        <h3>DİĞER ÜRÜNLERİMİZ</h3>
        <div className="wline"></div>
        <div className="prodList related">{getListe()}</div>
      </div>
    </>
  )
}
