import CategoryList from '../components/categoryList'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader'
import { htmlToText } from 'html-to-text';
import moment from 'moment';
import { route } from '../setup/route'

export default function BlogList(props) {
    const { blogList } = props;

    if (!blogList) {
        return <Loading />;
    }

    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.blogList });

    function getBlog() {
        let res = [];
        for (const item of blogList.blogListe) {
            res.push(
                <div key={'blog' + item.id} className="blogItem">
                    <div className="blogImage">
                        <Link to={route.blogDetail(item.slug)}>
                            <img src={"https://file.uludagenerji.net" + item.thumb} alt={item.baslik} />
                        </Link>
                    </div>
                    <div className="blogCont">
                        <div className="meta">
                            <Link className="cat" to={route.blogListCategory(item.kategoriSlug, 1)}>{item.kategori}</Link>
                            <span>{moment(item.yayinlanmaTarihi).format("YYYY-MM-DD")}</span>
                        </div>
                        <Link to={route.blogDetail(item.slug)}>{item.baslik}</Link>
                        <p dangerouslySetInnerHTML={{ __html: htmlToText(item.icerik) + '...' }} />
                        <Link className="readMore" to={route.blogDetail(item.slug)}>Devamını Oku<i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            );
        }

        return res;
    }
console.log(blogList);
    return (
        <>
            <Helmet title={"Uludağ Enerji Haberler"} >
                <meta name='description' content={"Uludağ Enerji Haberler"} />
                <link rel='canonical' href={route.canonical(route.blogList)} />
            </Helmet>

            <SubHeader title="Blog Liste" backgroundImage="/images/hakkimizda.png" breadcrumbList={[{ key: 1, title: 'Blog Liste', route: route.blogList, className: 'nowhere' }]} />
            <div className="wline"></div>
            <div className="container">
                <div className="blogWrap">
                    <div className="sideBar">
                        <CategoryList categorys={blogList.kategori} />
                        {/* <div className="widget white">
                            <h3>Ara</h3>
                            <input type="text" placeholder="..." />
                        </div> */}
                        <div className="widget">
                            <div className="witem wleft">
                                <h4>GÜNCEL <span>BROŞÜRÜMÜZ</span></h4>
                                <img src="/images/brosur.png" height="170" alt="" />

                                <a target={"_blank"} className="witemLink" href="/dosya.pdf">İNCELE</a>
                            </div>
                        </div>
                    </div>
                    <div className="blogContent">
                        {getBlog()}
                    </div>
                </div>
            </div>
        </>
    )
}
