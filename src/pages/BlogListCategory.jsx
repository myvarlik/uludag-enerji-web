import CategoryList from '../components/categoryList'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader'
import { htmlToText } from 'html-to-text';
import moment from 'moment';
import paging from '../setup/utility/paging';
import { route } from '../setup/route'

export default function BlogListCategory(props) {
    const { blogListCategory } = props;

    if (!blogListCategory) {
        return <Loading />;
    }

    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.blogListCategory(blogListCategory.kategoriOwn?.slug, blogListCategory.page) });

    function getBlog() {
        let res = [];
        for (const item of blogListCategory.blogListe) {
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

        if (res.length === 0) {
            res.push(<h1>Bu Kategoride Henüz Makale Yok</h1>);
        }

        return res;
    }

    return (
        <>
            <Helmet title={"Uludağ Enerji Haberler"} >
                <meta name='description' content={"Uludağ Enerji Haberler"} />
                <link rel='canonical' href={route.canonical(route.blogListCategory(blogListCategory.kategoriOwn.slug, blogListCategory.page))} />
            </Helmet>

            <SubHeader title="Blog Liste" backgroundImage="/images/hakkimizda.png" breadcrumbList={[{ key: 1, title: 'Blog Liste', route: route.blogList, className: 'nowhere' }]} />
            <div className="wline"></div>
            <div className="container">
                <div className="blogWrap">
                    <div className="sideBar">
                        <CategoryList categorys={blogListCategory.kategori} />
                        {/* 
                        <div className="widget white">
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

                        {blogListCategory.blogListe.length > 0 ?
                            <div className="pagination">
                                <ul>
                                    {paging(blogListCategory.total, blogListCategory.page, blogListCategory.pageSize, blogListCategory.kategoriOwn.slug, route.blogListCategory)}
                                </ul>
                            </div> :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
