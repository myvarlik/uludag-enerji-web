export const route = {
    canonical: slug => 'https://www.uludagenerji.net' + slug,
    home: '/',
    about: '/hakkimizda',
    contact: '/iletisim',
    questions: '/sorular',
    blogList: '/blog-liste',
    blogListCategory: (slug, page) => '/blog-liste/' + slug + "/" + page,
    blogDetail: slug => '/blog-detay/' + slug,
    productCategory: '/urunler',
    productList: slug => '/urun-liste/' + slug,
    productDetail: slug => '/urun-detay/' + slug,
}