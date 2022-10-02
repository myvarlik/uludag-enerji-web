import '../../node_modules/sweetalert2/dist/sweetalert2.min.css'

import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export default function offerAdd() {
    return (
        <div className="calltoAction">
            <div className="container">
                <h2>Isınma giderlerinde <span>%40</span>’lara varan tasarruf...</h2>
                <p>
                    Bireysel tüketim değerlerini eksiksiz olarak kullanıcılara sunan ısı
                    pay ölçer sistemi, tasarrufa teşvik eder.
                </p>
                <a style={{ cursor: "pointer" }} onClick={() => {
                    window.open('mailto:bilgi@uludagenerji.com?subject=Fiyat Teklif İstiyorum');
                }}><i className="far fa-paper-plane"></i> TEKLİF ALIN</a>
            </div>
        </div >
    )
}