import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const navigate = useNavigate();

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [ heroeId ]); 

    if (!hero) {
        return <Navigate to='/' />
    }

    const handleReturn = () => {
        return navigate(-1);
    }
    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`/assets/${id}.jpg`} alt={superhero} className='img-thumbnail' />
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group '>
                    <li className='list-group-item'><b>Alter ego:</b> {alter_ego}</li>
                    <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
                    <li className='list-group-item'><b>First appearance:</b> {first_appearance}</li>
                </ul>
                <h3>Characters</h3>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    regresar
                </button>
            </div>
        </div>
    )
}
