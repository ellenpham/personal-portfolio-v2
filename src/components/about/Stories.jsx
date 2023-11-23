import React from 'react';
import SingleStory from './SingleStory';

const Stories = ({stories}) => {
  return (
    <section className='stories__container container grid'>
        <div className='stories__group'>
            {stories.map( (story) => {
                return <SingleStory key={stories.id} {...story} />
            })}
        </div>
    </section>
  )
}

export default Stories