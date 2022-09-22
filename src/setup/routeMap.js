import About from "../pages/About";
import BlogDetail from "../pages/BlogDetail";
import BlogList from "../pages/BlogList";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductCategory from "../pages/ProductCategory";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Questions from "../pages/Questions";
import { api } from './api'
import { fetcher } from '../partial/fetcher/fetcher'
import { fetching } from './utility/fetching';
import { route } from "./route";

const routeFetchArr = {
    "home": () => fetching({ url: api.home }),
    "questions": () => fetching({ url: api.questions }),
    "blogList": () => fetching({ url: api.blogList }),
    "blogDetail": ({ match }) => fetching({ url: api.blogDetail(match.params.slug) }),
    "productCategory": () => fetching({ url: api.productCategory }),
    "productList": ({ match }) => fetching({ url: api.productList(match.params.slug) }),
    "productDetail": ({ match }) => fetching({ url: api.productDetail(match.params.slug) }),
}

export const routeMap = [
    {
        path: route.home,
        component: fetcher(Home, routeFetchArr.home, "home"),
        exact: true,
        fetch: routeFetchArr.home,
        stateName: "home"
    },
    {
        component: fetcher(BlogList, routeFetchArr.blogList, "blogList"),
        fetch: routeFetchArr.blogList,
        stateName: "blogList",
        path: route.blogList,
    },
    {
        component: fetcher(BlogDetail, routeFetchArr.blogDetail, "blogdetail"),
        fetch: routeFetchArr.blogDetail,
        stateName: "blogdetail",
        path: route.blogDetail(':slug'),
    },

    {
        component: fetcher(ProductCategory, routeFetchArr.productCategory, "productCategory"),
        fetch: routeFetchArr.productCategory,
        stateName: "productCategory",
        path: route.productCategory,
    },
    {
        component: fetcher(ProductDetail, routeFetchArr.productDetail, "productDetail"),
        fetch: routeFetchArr.productDetail,
        stateName: "productDetail",
        path: route.productDetail(':slug'),
    },
    {
        component: fetcher(ProductList, routeFetchArr.productList, "productList"),
        fetch: routeFetchArr.productList,
        stateName: "productList",
        path: route.productList(':slug'),
    },
    {
        component: fetcher(Questions, routeFetchArr.questions, "questions"),
        fetch: routeFetchArr.productList,
        stateName: "productList",
        path: route.questions,
    },
    {
        path: route.about,
        component: About,
    },
    {
        path: route.contact,
        component: Contact,
    },
];