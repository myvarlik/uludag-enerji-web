
let api = {
    home: "/home",
    questions: "/sorular",
    blogList: "/blog-liste",
    blogListCategory: (slug, page) => '/blog-liste/' + slug + "/" + page,
    blogDetail: slug => '/blog-detay/' + slug,
    productCategory: "/urun-kategori",
    productList: slug => '/urun-liste/' + slug,
    productDetail: slug => '/urun-detay/' + slug,
    mailAdd: '/mail-list',
    contactAdd: '/contact-add',
}

export { api };