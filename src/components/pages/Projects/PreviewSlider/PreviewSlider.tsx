import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import 'swiper/css';
import { ProjectItemType } from '../ProjectsPage';
import './PreviewSlider.scss'

export const PreviewSlider: React.FC<PreviewSliderPropsType> = ({cards, selectCard, selectedCardId}) => {
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
                modules={[Autoplay, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                loop
                allowTouchMove={false}
                autoplay={{delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                // keyboard={{enabled: true}}
                // onKeyPress={(swiper: any, keyCode: any) => console.log(keyCode)}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    // console.log(swiper);
                    //@ts-ignore
                    swiperRef.current = swiper
                }}
                >

                {
                    cards.map(card => {
                        const onCardSelected = () => {
                            selectCard(card)
                        }

                        const cardCN = card.id === selectedCardId 
                            ? "preview-slider__item preview-slider__item_active" 
                            : "preview-slider__item"

                        return (
                            <SwiperSlide>
                                {/* todo: create project title */}
                                <div onClick={onCardSelected} className={cardCN}> 
                                    <img src={card.previewImage} alt="project preview img" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
            
            <button onClick={showPrevSlides} className="swiper-prev-arrow"></button>
            <button onClick={showNextSlides} className="swiper-next-arrow"></button>
        </div>
    )
}


type PreviewSliderPropsType = {
    cards: Array<ProjectItemType>
    selectedCardId: number
    selectCard: (card: ProjectItemType) => void
}