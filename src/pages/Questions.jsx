import { Helmet } from 'react-helmet-async';
import Loading from '../components/loading';
import Question from '../components/question';
import React from 'react'
import ReactGA from 'react-ga4';
import SubHeader from '../components/subheader';
import { route } from '../setup/route'

export default function Questions(props) {
    let questions = props.questions;

    if (!questions) {
        return <Loading />;
    }

    ReactGA.initialize('G-6JJZSC5FD7');
    ReactGA.send({ hitType: 'pageview', page: route.questions });

    function getQuestions() {
        let res = [];
        if (questions) {
            for (const item of questions) {
                res.push(
                    <Question key={item.id} soru={item.soru} cevap={item.cevap} />
                )
            }
        }

        return (res);
    }

    return (
        <>
            <Helmet title='Uludağ Enerji Sık Sorulan Sorular'>
                <meta name='description' content={"Uludağ Enerji Sık Sorulan Sorular"} />
                <link rel='canonical' href={route.canonical(route.questions)} />
            </Helmet>
            <Helmet title='Uludağ Enerji Sık Sorulan Sorular' />
            <SubHeader title="Sık Sorulan Sorular" backgroundImage="" breadcrumbList={[{ key: 1, title: 'İletişim', route: route.blogList, classNameName: 'nowhere' }]} />
            <div className="container">
                <p>
                    Her türlü sorunuz için <a href={route.contact}>iletişim sayfamızdan</a> bize yazabirsiniz.
                </p>
                {getQuestions()}
            </div>
        </>
    )
}
