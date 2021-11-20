import {Link} from 'react-router-dom';

export function Pet({pet}) {
    return (
        <section className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                <Link to={`/pets/details/${pet._id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> {pet.likes}</span>
            </div>
        </section >
    );
}