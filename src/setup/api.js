
let api = {
    home: "/home",
    questions: "/sorular",
    blogList: "/blog-liste",
    blogListC: slug => '/blog-liste/' + slug,
    blogDetail: slug => '/blog-detay/' + slug,
    productCategory: "/urun-kategori",
    productList: slug => '/urun-liste/' + slug,
    productDetail: slug => '/urun-detay/' + slug,
    mailAdd: '/mail-list',
}

export { api };