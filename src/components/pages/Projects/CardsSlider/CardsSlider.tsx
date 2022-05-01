import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectCard } from './../ProjectCard/ProjectCard';
import { ProjectItemType } from '../ProjectsPage';

export const CardsSlider: React.FC<CardsStackPropsType> = ({cards}) => {

    return (
        <div style={{width: '400px', height: '495px'}} className="cards-slider">
            <Swiper
                spaceBetween={3}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>

                {cards.map(card => <SwiperSlide><ProjectCard project={card} onImageClick={()=>{}} /></SwiperSlide>)}

            </Swiper>
        </div>
    )
}

type CardsStackPropsType = {
    cards: Array<ProjectItemType>
}