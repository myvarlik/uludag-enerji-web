import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import React from 'react';

export default function slider({ sliders }) {
    React.useEffect(() => {
        var boxItem = document.querySelector("#boxItem").getBoundingClientRect();
        var cols = document.querySelector(".control-dots");
        cols.style.left = boxItem.left + window.scrollX + "px";

        function handleResize(a) {
            var boxItem = document.querySelector("#boxItem").getBoundingClientRect();
            var cols = document.querySelector(".control-dots");
            cols.style.left = boxItem.left + window.scrollX + "px";
        }

        window.addEventListener('resize', handleResize)
    });

    const [title, setTitle] = React.useState(sliders[0].baslik);
    const [link, setLink] = React.useState(sliders[0].url);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    function getSlider() {
        let res = [];
        if (sliders) {
            for (const item of sliders) {
                if (item.url) {
                    res.push(
                        <div
                            key={item.id}
                            className="item"
                            dataTitle={item.baslik}
                            dataLink={item.url}
                        >
                            <img src={"https://file.uludagenerji.net" + item.resim} alt={item.baslik} />
                        </div>
                    )
                } else {
                    res.push(
                        <div
                            key={item.id}
                            className="item"
                            dataTitle={item.baslik}
                        >
                            <img src={"https://file.uludagenerji.net" + item.resim} alt={item.baslik} />
                        </div>
                    )
                }

            }
        }

        return (res);
    }

    function next() {
        if (sliders.length - 1 === currentSlide) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    function prev() {
        if (currentSlide === 0) {
            setCurrentSlide(sliders.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="mainSliderWrap">
            <div className="actionBox">
                <div className="BoxItem" id="boxItem">
                    <h3>
                        <span>{title}</span>
                    </h3>
                    <a href={link} target="_blank">İNCELE</a>
                    <div className="slideNext" onClick={() => { next(); }}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="slidePrev" onClick={() => { prev(); }}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                </div>
            </div>
            <Carousel
                selectedItem={currentSlide}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                autoPlay={true}
                className="mainSlider"
                onChange={(i, item) => {
                    const { dataLink, dataTitle } = item.props;
                    setLink(dataLink);
                    setTitle(dataTitle);
                }}>
                {getSlider()}
            </Carousel>
        </div>
    )
}
