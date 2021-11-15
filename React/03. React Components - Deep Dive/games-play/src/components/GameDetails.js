import {useState, useEffect} from 'react';
import {getOne} from '../services/gameService';

export function GameDetails({id, navigator}) {
    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        loadGame(id);
    }, []);


    async function loadGame(id) {
        try {
            let game = await getOne(id);
            setGame(() => game);
            setIsLoading(() => false);
        } catch (error) {
            navigator('error');
            console.error(error);
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
        <>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons" onClick={redirectHandler}>
                    <a href={`/edit/${id}`} className="button">Edit</a>
                    <a href={`/delete/${id}`} className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    );

    return (
        <section id="game-details">
            <h1>Game Details</h1>

            {isLoading
                ? <p className="no-articles">Loading...</p>
                : content
            }

        </section>
    );
}