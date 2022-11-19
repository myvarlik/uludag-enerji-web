
export default function paging(total, page, pageSize, slug, func) {
    let activeClass = "pActive";
    let pageCount = Math.ceil(total / pageSize);

    let res = [];
    for (let i = 1; i < pageCount + 1; i++) {
        res.push(<li key={"page-" + i}><a className={i == page ? activeClass : ""} href={func(slug, i)}>{i}</a></li>)
    }


    return res;
}
