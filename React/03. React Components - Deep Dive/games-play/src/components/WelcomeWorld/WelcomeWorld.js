import {useState, useEffect} from 'react';
import {getAll} from '../../services/gameService';
import {LatestGameCard} from './LatestGameCard';

export function WelcomeWorld({history}) {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function loadGames() {
        try {
            const games = await getAll();
            setState(() => games);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        loadGames();
    }, []);

    const content = state.length > 0
        ? state.map(game => <LatestGameCard key={game._id} game={game} />)
        : <p className="no-articles">No games yet</p>;

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {isLoading
                    ? <p className="no-articles">Loading...</p>
                    : content
                }

            </div>
        </section>
    );
}