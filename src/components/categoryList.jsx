import { Link } from 'react-router-dom';
import React from 'react'
import { route } from '../setup/route';

export default function categoryList({ categorys }) {
    function getCategory() {
        let res = [];
        if (categorys)
            for (const item of categorys) {
                res.push(
                    <li key={item.id}><Link to={route.blogListCategory(item.slug, 1)}>{item.adi}</Link></li>
                )
            }

        return res;
    }

    return (
        <div className="widget dark cat">
            <h3>Kategoriler</h3>
            <ul>
                {getCategory()}
            </ul>
        </div>
    )
}
