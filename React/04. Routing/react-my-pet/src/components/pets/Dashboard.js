import {useState, useEffect} from 'react';
import * as petService from '../../services/petService';
import {Pet} from './Pet';

export function Dashboard() {
    const [pets, setPets] = useState([]);

    async function loadPets() {
        const data = await petService.getAll();
        setPets(() => data);
    }

    useEffect(() => {
        loadPets();
    }, []);


    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <nav className="navbar">
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Cats</a></li>
                    <li><a href="#">Dogs</a></li>
                    <li><a href="#">Parrots</a></li>
                    <li><a href="#">Reptiles</a></li>
                    <li><a href="#">Other</a></li>
                </ul>
            </nav>
            <ul className="other-pets-list">
                {pets.map(p => <Pet key={p._id} pet={p} />)}
            </ul>
        </section>
    );
}