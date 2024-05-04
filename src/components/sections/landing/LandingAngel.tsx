/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { MutableRefObject, useRef } from "react";
import { angelData } from "../../../helpers/constants";
import AngelCard from "../../cards/AngelCard";

const LandingAngel = (): JSX.Element => {
  const swiperRef: MutableRefObject<any> = useRef(null);

  const prevSwiper = () => {
    swiperRef.current.slidePrev();
  };

  const nextSwiper = () => {
    swiperRef.current.slideNext();
  };

  const { t } = useTranslation();

  return (
    <section className="landing__angel">
      <div className="angel-content">
        <div className="header">
          <h2>{t("angel.title")}</h2>
          <div className="swiper-buttons">
            <div className="left" onClick={() => prevSwiper()}>
              <img src="/chevron-left.png" alt="" />
            </div>
            <div className="right" onClick={() => nextSwiper()}>
              <img src="/chevron-right.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={4}
            spaceBetween={25}
            modules={[Pagination, Navigation, A11y]}
            className="mySwiper"
          >
            {angelData.map((item, index) => (
              <SwiperSlide key={index}>
                <AngelCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LandingAngel;
