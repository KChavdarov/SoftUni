import {useState, useEffect} from 'react';
import {getAll} from '../services/gameService';

export function GameCatalogue({navigator}) {
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
            navigator('error');
        }
    }

    function redirectHandler(event) {
        if (event && event.target.tagName === 'A') {
            event.preventDefault();
            const url = new URL(event.target.href);
            const [name, id] = url.pathname.split('/').filter(a => a);
            navigator(name, id);
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
                        <a href={`/details/${game._id}`} onClick={redirectHandler} className="details-button">Details</a>
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