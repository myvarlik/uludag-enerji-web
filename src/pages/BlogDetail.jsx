import CategoryList from '../components/categoryList'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader'
import { htmlToText } from 'html-to-text';
import moment from 'moment'
import { route } from '../setup/route'

function BlogDetail(props) {
    const { blogdetail } = props;

    if (!blogdetail) {
        return <Loading />;
    }

    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.blogDetail(blogdetail?.detayData?.slug) });

    return (
        <>
            <Helmet title={blogdetail?.detayData?.baslik} >
                <meta property='og:title' content={blogdetail?.detayData?.baslik} />
                <meta property='og:description' content={blogdetail?.detayData?.meta} />
                <meta property='og:image' content={"https://file.uludagenerji.net" + blogdetail?.detayData?.resim} />
                <meta name='description' content={blogdetail?.detayData?.meta} />
                <link rel='canonical' href={route.canonical(route.blogDetail(blogdetail?.detayData?.slug))} />
            </Helmet>
            <SubHeader title="Blog" backgroundImage="/images/hakkimizda.png" breadcrumbList={[{ key: 1, title: 'Bloglar', route: route.blogList, className: '' }, { key: 2, title: blogdetail?.detayData?.baslik, route: '', className: 'nowhere' }]} />

            <div className="wline"></div>
            <div className="container">
                <div className="blogWrap">
                    <div className="sideBar">
                        <CategoryList categorys={blogdetail?.kategoriData} />

                    </div>
                    <div className="blogContent">
                        <div className="blogItemFull">
                            <div className="blogImagefull">
                                <img src={"https://file.uludagenerji.net" + blogdetail?.detayData?.resim} alt={blogdetail?.detayData?.baslik} />
                            </div>
                            <div className="blogCont bdetay">
                                <div className="meta">
                                    <Link className="cat" to={"/" + blogdetail?.detayData?.kategorislug}>{blogdetail?.detayData?.kategori}</Link>
                                    <span>{moment(blogdetail?.detayData?.yayinlanmaTarihi).format('DD-MM-YYYY')}</span>
                                </div>
                                <h2>{blogdetail?.detayData?.baslik}</h2>
                                <div dangerouslySetInnerHTML={{ __html: blogdetail?.detayData?.icerik }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail; 