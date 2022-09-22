import { Link } from 'react-router-dom';
import React from 'react'

export default function subheader({ title, breadcrumbList, backgroundImage }) {

    function getbreadcrumb() {
        let res = [];
        if (breadcrumbList)
            for (const item of breadcrumbList) {
                res.push(
                    <Link key={item.key} className={item.class} to={item.route}>{item.title}</Link>
                )
            }

        return res;
    }

    return (
        <div className="subheader" style={{ backgroundImage: 'url("' + backgroundImage + '")' }}>
            <div className="container">
                <h1>{title}</h1>
                <p>
                    <Link to="/">Anasayfa</Link>
                    {getbreadcrumb()}
                </p>
            </div>
        </div>
    )
}
