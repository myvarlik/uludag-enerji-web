import { Helmet } from 'react-helmet-async';
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader';
import Swal from 'sweetalert2'
import { api } from '../setup/api'
import { fetching } from '../setup/utility/fetching';
import { route } from '../setup/route'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Contact() {
    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.contact });

    const [adi, setAdi] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [aciklama, setAciklama] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <Helmet title='Uludağ Enerji İletişim'>
                <meta name='description' content={"Uludağ Enerji Hakkımızda İletişim"} />
                <link rel='canonical' href={route.canonical(route.contact)} />
            </Helmet>
            <SubHeader title="İletişim" backgroundImage="/images/subheader.png" breadcrumbList={[{ key: 1, title: 'İletişim', route: route.blogList, class: 'nowhere' }]} />
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.429350558456!2d29.120487115733233!3d40.993974879302144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf5516ef0a05%3A0x157b6a54b6638981!2zTWV0cm9wb2wgxLBzdGFuYnVsIEFsxLHFn3ZlcmnFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1649139466777!5m2!1str!2str"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            >
            </iframe>
            <div className="container">
                <div className="middleCont">
                    <div className="midLeft">
                        <h4>BİZE ULAŞIN</h4>
                        <div className="inWrap">
                            <div>
                                <label>Adınız</label>
                                <input type="text" placeholder="Adınız" value={adi} onChange={(e) => setAdi(e.target.value)} />
                            </div>
                            <div>
                                <label>Mailiniz</label>
                                <input type="text" placeholder="mail@adresiniz.com" value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                        </div>
                        <div className="textarea">
                            <textarea cols="30" rows="10" onChange={(e) => setAciklama(e.target.value)}></textarea>
                        </div>
                        <button className="send" disabled={loading} onClick={async () => {
                            setLoading(true);
                            const postData = {
                                adi,
                                mail,
                                aciklama
                            }

                            console.log(postData);

                            try {
                                await fetching({ data: postData, url: api.contactAdd, method: 'POST' });
                                MySwal.fire({
                                    title: "Uludağ Enerji",
                                    text: "Bizimle iletişime geçtiğiniz için teşekkür ederiz!",
                                    confirmButtonText: "Tamam",
                                    confirmButtonColor: "#df5630"
                                })
                            } catch (error) {
                                MySwal.fire({
                                    title: "Bir Hata Oluştu Lütfen Tekrar Deneyiniz.",
                                    footer: 'Uludağ Enerji İletişim',
                                    confirmButtonText: "Tamam",
                                    confirmButtonColor: "#df5630"
                                })
                            }

                            setAdi("");
                            setMail("");
                            setAciklama("");
                            setLoading(false);
                        }}>GÖNDER</button>
                    </div>
                    <div className="midRight">
                        <div className="inright">
                            <p>Mail <a href="mailto:bilgi@uludagenerji.com">bilgi@uludagenerji.com</a></p>
                            <p>Telefon <span><a href="tel:0216 290 20 62">0216 290 20 62</a></span></p>
                            <p className="mbn">
                                Çalışma Saatlerimiz <span>09:00 - 18:00 Pzt - Cuma</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="wline"></div>
                <p>
                    Keşif hizmetimiz, olağan veya olağanüstü genel kurul toplantılarınıza katılımımız ücretsizdir. Tecrübelerimizi sizlere aktarmaktan ve %40 civarı yakıt tasarrufunuza aracılık etmekten memnuniyet duyacaız.
                    Her aradığınızda ulaşabileceğiniz, aklınıza gelen soruları, yaşadığınız sorunları birebir telefonla çözeceğiniz tecrübeli ekibimiz, sizlere hizmet etmekten gurur duyar. Yukarıdaki numarayı aramanız veya iletişim bilgilerinizi bırakmanız çalışmaya başlamamız için ilk adımdır.
                    Uludağ Enerji, doğru firmadır...
                </p>
            </div>
        </>
    )
}
