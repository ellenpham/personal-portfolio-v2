import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleStory = ({title, description}) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='story__item'>
            <div className='story__header'>
                <div className='story__title text-cs'>{title}</div>
                <span className='story__icon' onClick={ () => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
            </div>

            <div className={`${showInfo ? 'show-content' : ''} story__content`}>
                <p className='story__description'>{description}</p>
            </div>

        </div>
    )
}

export default SingleStory;