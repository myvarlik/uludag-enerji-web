import '../../node_modules/sweetalert2/dist/sweetalert2.min.css'

import React from 'react'
import Swal from 'sweetalert2'
import { api } from '../setup/api'
import { fetching } from '../setup/utility/fetching';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function oArea() {
    const [adi, setAdi] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    return (
        <div className="oArea">
            <div className="container">
                <div className="oAreaCont">
                    <div className="subs wspace">
                        <p>Tüm yeniliklerden <span>Haberdar olun</span></p>
                        <div className="inputWrapper">
                            <input type="text" placeholder="Adınız" value={adi} onChange={(e) => setAdi(e.target.value)} />
                            <input type="text" placeholder="mai@adresiniz.com" value={mail} onChange={(e) => setMail(e.target.value)} />
                            <button type="button" disabled={loading} onClick={async () => {
                                setLoading(true);
                                const postData = {
                                    adi,
                                    mail
                                }

                                try {
                                    await fetching({ data: postData, url: api.mailAdd, method: 'POST' });
                                    MySwal.fire({
                                        title: "Başarılı bir şekilde eklendi!",
                                        footer: 'Uludağ Enerji Mail Listesi',
                                        confirmButtonText: "Tamam",
                                        confirmButtonColor: "#df5630"
                                    })
                                } catch (error) {
                                    MySwal.fire({
                                        title: error.response.data.message,
                                        footer: 'Uludağ Enerji Mail Listesi',
                                        confirmButtonText: "Tamam",
                                        confirmButtonColor: "#df5630"
                                    })
                                }

                                setAdi("");
                                setMail("");
                                setLoading(false);
                            }}>KAYIT OL</button>
                        </div>
                    </div>
                    {/* <div className="literal wspace">
                        Uludağ Enerji
                        <img src="/images/sinerji.png" height="70" alt="" /> Markasıdır.
                    </div> */}
                </div>
            </div>
        </div>
    )
}
