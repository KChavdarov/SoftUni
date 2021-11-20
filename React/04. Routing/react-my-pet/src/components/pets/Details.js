import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {getOne} from '../../services/petService';

export function Details() {
    const {petId} = useParams();
    const [pet, setPet] = useState({});

    async function loadPet() {
        const pet = await getOne(petId);
        setPet(() => pet);
    }

    useEffect(() => {
        loadPet();
    }, []);

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
        </section>
    );
}