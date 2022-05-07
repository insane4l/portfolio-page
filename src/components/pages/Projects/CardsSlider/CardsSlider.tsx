import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
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
                modules={[Pagination]}
                loop
                spaceBetween={3}
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