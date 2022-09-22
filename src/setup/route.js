export const route = {
    canonical: slug => 'https://www.uludagenerji.net' + slug,
    home: '/',
    about: '/hakkimizda',
    contact: '/iletisim',
    questions: '/sorular',
    blogList: '/blog-liste',
    blogListC: slug => '/blog-liste/' + slug,
    blogDetail: slug => '/blog-detay/' + slug,
    productCategory: '/urunler',
    productList: slug => '/urun-liste/' + slug,
    productDetail: slug => '/urun-detay/' + slug,
}