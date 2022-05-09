import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import { ProjectCard } from './../ProjectCard/ProjectCard'
import { ProjectItemType } from '../ProjectsPage'
import './CardsSlider.scss'

export const CardsSlider: React.FC<CardsStackPropsType> = ({cards}) => {

    return (
        <div className="cards-slider">
            <Swiper
                style={{height: '109%'}}
                modules={[Pagination, Autoplay]}
                loop
                autoplay={{delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                spaceBetween={20}
                slidesPerView={1}
                pagination>

                {cards.map(card => <SwiperSlide key={card.id}><ProjectCard project={card} onImageClick={()=>{}} /></SwiperSlide>)}

            </Swiper>
        </div>
    )
}

type CardsStackPropsType = {
    cards: Array<ProjectItemType>
}