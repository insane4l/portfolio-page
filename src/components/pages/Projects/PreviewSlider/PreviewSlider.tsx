import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProjectItemType } from '../ProjectsPage';
import './PreviewSlider.scss'

export const PreviewSlider: React.FC<PreviewSliderPropsType> = ({cards, selectCard}) => {
    const swiperRef = useRef();
    
    const showNextSlides = () => {
        //@ts-ignore
        swiperRef.current.slideNext()
    }
    const showPrevSlides = () => {
        //@ts-ignore
        swiperRef.current.slidePrev()
    }

    return (
        <div className="preview-slider">
            <Swiper
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                // loop
                allowTouchMove={false}
                autoplay={{delay: 3000}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    //@ts-ignore
                    swiperRef.current = swiper
                }}
                >

                {
                    cards.map(card => {
                        const onCardSelected = () => {
                            selectCard(card)
                        }
                        return (
                            <SwiperSlide>
                                <div onClick={onCardSelected} className="preview-slider__item">
                                    <img src={card.previewImage} alt="project preview img" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>

            <div onClick={showPrevSlides} className="swiper-prev-arrow"></div>
            <div onClick={showNextSlides} className="swiper-next-arrow"></div>
        </div>
    )
}


type PreviewSliderPropsType = {
    cards: Array<ProjectItemType>
    selectCard: (card: ProjectItemType) => void
}