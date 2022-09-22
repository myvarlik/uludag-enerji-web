import { Helmet } from 'react-helmet-async'
import MailAdd from '../components/mailAdd'
import React from 'react';
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader'
import { route } from '../setup/route'

export default function About() {
  ReactGA.initialize('G-6JJZSC5FD7');
  ReactGA.send({ hitType: 'pageview', page: route.about });

  return (
    <>
      <Helmet title='Uludağ Enerji Hakkımızda'>
        <meta name='description' content={"Uludağ Enerji Hakkımızda Bilgiler"} />
        <link rel='canonical' href={route.canonical(route.about)} />
      </Helmet>
      <SubHeader title="Hakkımızda" backgroundImage="/images/subheader.png" breadcrumbList={[{ key: 1, title: 'Hakkımızda', route: route.about, class: 'nowhere' }]} />
      <div className="wline"></div>
      <div className="wline"></div>

      <div className="container">
        <div className="about">
          <div><img src="/images/about.png" alt="" /></div>
          <div>
            <h2>Daha yakından tanıyın</h2>
            <p>
              2009 yılında kurulan ve Uludağ Enerji markasıyla faaliyete başlayan firmamız, başta Bursa olmak üzere tüm Türkiye’de ileri teknoloji ürünleriyle enerji verimliliği konusunda faaliyet göstermektedir.
            </p>
          </div>
        </div>

        <div className="wline"></div>

        <div className="charts">
          <div className="citem activeCitem">
            <div className="citemSub citemSubgf">
              <span className="numb">1</span>
            </div>
            <div className="citemSub citemSubg">
              <strong>Yıllardır Sizi Dinliyoruz</strong>
              <p>Tasarrufunuz için sürekli teknolojimizi yenileyip yeni çözümler üretiyoruz. İlham kaynağımız sizsiniz. </p>
            </div>
          </div>
          <div className="citem activeCitem">
            <div className="citemSub citemSubgf">
              <span className="numb">2</span>
            </div>
            <div className="citemSub citemSubg">
              <strong>Soğukla Savaşıyoruz</strong>
              <p>Hava Ne kadar soğuk olursa olsun, ısınma faturanızı düşürmek için araştırmalar yapıyor, tavsiyelerde bulunuyoruz. </p>
            </div>
          </div>
          <div className="citem activeCitem">
            <div className="citemSub citemSubgf">
              <span className="numb">3</span>
            </div>
            <div className="citemSub citemSubg">
              <strong>Cebinizin ve Sizin Dostunuz</strong>
              <p>Merkezi ısıtma sisteminin konforuyla bireysel ısıtma sisteminin avantajlarını buluşturuyoruz. </p>
            </div>
          </div>
          <div className="citem activeCitem">
            <div className="citemSub citemSubgf">
              <span className="numb">4</span>
            </div>
            <div className="citemSub citemSubg">
              <strong>Yarını düşünenlerin tercihi</strong>
              <p>Kaynakların, idareli olarak kullanılıp, gelecek nesillere aktarımı için çalışıyoruz.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wline"></div>
      <div className="line"></div>
      <div class="about">
        <div><img src="/images/about.png" alt="uludağ enerji vizyon" /></div>
        <div>
          <h2>Vizyon</h2>
          <p>
            Türkiye genelinde kaliteli ve en iyi hizmet veren, memnun müşteri odaklı, tasarrufa yönelik ekonomik ürün ve hizmetler sunarak en çok tercih edilen şirket olmak.
          </p>
        </div>
      </div>
      <div class="wline"></div>
      <div class="container">
        <div className="about">

          <div>
            <h2>Misyon</h2>
            <p>
              Hizmet sektöründe, güvenilir kalmak ve yaptığımız işte müşteri memnuniyetini en üst seviyede tutmak. Çalışmalarımızı teknoloji ile sentezleyip, sektördeki profesyonelliğimiz, güvenilirliğimiz ve uzmanlığımızla müşterilerimizin ihtiyaç ve beklentilerini karşılamakla kalmayıp, daha fazlasını vermek için sürekli mükemmeli aramak.
            </p>
          </div>
          <div><img src="/images/about.png" alt="uludağ enerji misyon" /></div>
        </div>
      </div>
    </>
  )
}

