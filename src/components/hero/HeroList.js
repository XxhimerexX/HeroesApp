import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() =>  getHeroesByPublisher(publisher), [publisher]) 

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {/* <h1>HeroList - {publisher}</h1> */}

                {
                    heroes.map(hero => (
                        
                        // <li key={hero.id}>
                        //     {hero.superhero}
                        // </li>
                        <HeroCard key={hero.id} {...hero}/>

                    ))
                }

        </div>
    )
}
