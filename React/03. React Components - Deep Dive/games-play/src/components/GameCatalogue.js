import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {getAll} from '../services/gameService';

export function GameCatalogue({history}) {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        loadGames();
    }, []);

    async function loadGames() {
        try {
            let games = await getAll();
            setState(() => games);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            history.push('/error');
        }
    }

    const content = (
        state.length > 0
            ? state.map(game => (
                <div key={game._id} className="allGames">
                    <div className="allGames-info">
                        <img src={game.imageUrl} />
                        <h6>{game.category}</h6>
                        <h2>{game.title}</h2>
                        <NavLink to={`/games/${game._id}`} className="details-button">Details</NavLink>
                    </div>
                </div>
            ))
            : <h3 className="no-articles">No articles yet</h3>
    );

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {isLoading
                ? <p className="no-articles">Loading...</p>
                : content
            }
        </section>
    );
}