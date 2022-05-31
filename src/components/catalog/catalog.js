import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function Catalog() {
  const [data, setData] = useState([]);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { catalog: c } = Content[lang];

  return (
    <>
      <section className="catalog" id="catalog">
        <div className="container">
          <h2 className="catalog__heading">{c.heading}</h2>
          <p className="catalog__desc">{c.desc1}</p>
          <p className="catalog__desc catalog__desc--fonts-size">{c.desc2}</p>
          <Swiper
            className="catalog__slider"
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data &&
              data.map((e) => (
                <SwiperSlide className="catalog__slider__item" key={e.id}>
                  <div className="catalog__slider__item__img">
                    {/* <Image src={e.img} alt={e.title} width={} height={} /> */}
                  </div>

                  <h3 className="catalog__slider__item__title">{e.title}</h3>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="catalog__btn-box">
            <button className="catalog__btn">{c.more}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
