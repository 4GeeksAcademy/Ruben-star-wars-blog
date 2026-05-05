import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Card } from "./Card";

export const Gallery = ({ cardsData, title, icon, dataType}) => {

    const cardList = cardsData.map((card, index) => (
        <SwiperSlide key={index}>
            <Card key={card.uid} title={card.name} id={card.uid} dataType={dataType}/>
        </SwiperSlide>
    ))

    return (
        <>
            <h2 className="text-center text-white bg-dark m-0 mt-2 p-4">{icon} {title}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,      
                    disableOnInteraction: false
                }}
                navigation
                className="bg-dark"
            >
                {cardList}
            </Swiper>
        </>
    );
};


Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    cardsData: PropTypes.array.isRequired,
    dataType: PropTypes.string.isRequired
}