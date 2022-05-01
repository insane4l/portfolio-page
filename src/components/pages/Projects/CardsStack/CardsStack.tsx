import React from 'react'
import 'swiper/css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectItemType } from '../ProjectsPage';
import './CardsStack.scss'

export const CardsStack: React.FC<CardsStackPropsType> = ({selectedCard, onCardImageClick}) => {

    return (
        <div className="cards-stack">

            <TransitionGroup component={null}>
                <CSSTransition key={selectedCard.title} timeout={1000} classNames="card-stack-item">
                    <ProjectCard project={selectedCard} onImageClick={onCardImageClick} />
                </CSSTransition>
            </TransitionGroup>


        </div>
    )
}


type CardsStackPropsType = {
    selectedCard: ProjectItemType
    onCardImageClick: () => void
}