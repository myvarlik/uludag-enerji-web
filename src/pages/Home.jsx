import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';
import React from 'react';
import ReactGA from 'react-ga4';
import Slider from '../components/slider';
import { htmlToText } from 'html-to-text';
import { route } from '../setup/route'

export default function Home(props) {
  let home = props.home;
  if (!home) {
    return <Loading />;
  }

  ReactGA.initialize('G-6JJZSC5FD7');
  ReactGA.send({ hitType: 'pageview', page: route.home });

  function getUrunListe() {
    let res = [];
    for (const item of home?.randomUrunTop3) {
      res.push(
        <Link key={item.id} className="prodLisItem" to={route.productDetail(item.slug)}>
          <img src={"https://image.uludagenerji.net" + item.thumb} alt={item.baslik} />
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
      <Helmet title={"Uludağ Enerji Kurumsal Web Sitesi"}>
        <meta name='description' content='Uludağ Enerji markasıyla faaliyette olan firmamız tüm Türkiye’de ileri teknoloji ürünleriyle enerji verimliliği konusunda faaliyet göstermektedir.' />
        <link rel='canonical' href={route.canonical(route.home)} />
      </Helmet>

      {
        home?.slider ?
          <Slider sliders={home.slider} />
          : <></>
      }


      <div className="iconicArea container pad60">
        <div className="iconicItem ">
          <i className="fas fa-wifi"></i> Uzaktan M-Bus ve RF Radyo Frekanslı okuma
        </div>
        <div className="iconicItem ">
          <img src="/images/yaprak.png" className="icno" alt="" /> Çevre Dostu ve Ekonomik
        </div>
        <div className="iconicItem ">
          <img src="/images/alman.png" className="icno" alt="" /> Alman Mühendisliği
        </div>
        <div className="iconicItem ">
          <img src="/images/deneyim.png" className="icno" alt="" /> 13 Yıllık Tecrübe
        </div>
      </div>

      <div className="line"></div>

      <div className="container sectionWhois">
        <div className="whois">
          <div className="whoisItem wItemline">
            <div className="witem wleft">
              <h4>GÜNCEL <span>BROŞÜRÜMÜZ</span></h4>
              <img src="/images/brosur.png" height="170" alt="Uludağ Enerji Broşür" />
              <a target={"_blank"} className="witemLink" href="/dosya.pdf">İNCELE</a>
            </div>
            <div className="witem wright">
              <h4>TANITIM <span>VİDEOMUZ</span></h4>
              <a href="#">
                <img src="/images/play.png" height="170" alt="" />
              </a>
              <a href="#">
                <img className="mbn" src="/images/yt.png" height="30" alt="" />
              </a>
            </div>
          </div>
          <div className="whoisItem">
            <div className="whiteArea">
              <div className="whiteAreaCont">
                <h4>ULUDAĞ ENERJİ</h4>
                <p className="randomArea">
                  2009 yılında kurulan ve Uludağ Enerji markasıyla faaliyete
                  başlayan firmamız, başta Bursa olmak üzere tüm Türkiye’de
                  ileri teknoloji ürünleriyle enerji verimliliği konusunda
                  faaliyet göstermektedir.
                </p>
                <Link className="witemLink" to={route.questions}>SIK SORULAN SORULAR</Link>
                <a href="#" className="orange1">
                  YÖNETMELİKLER
                  <p>Detaylı bilgi alın</p>
                  <span className="icon"><i className="fas fa-arrow-right"></i></span
                  ></a>
                <a href="#" className="orange2"
                >SERTİFİKALARIMIZ
                  <p>Belgelerimiz</p>
                  <span className="icon"
                  ><i className="fas fa-arrow-right"></i></span
                  ></a>
                <Link to={route.about} className="orange3">
                  HAKKIMIZDA
                  <p>Yakından Tanıyın</p>
                  <span className="icon"><i className="fas fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wline"></div>
      <div className="productArea">
        <div className="container">
          <h3>ÜRÜNLERİMİZ <Link to={route.productCategory}>TÜMÜ</Link></h3>
          <div className="prodWrap">
            {getUrunListe()}
          </div>
        </div>
      </div>
    </>
  )
}