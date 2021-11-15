export function LatestGameCard({game, navigator}) {
    function redirectHandler(event) {
        if (event && event.target.tagName === 'A') {
            event.preventDefault();
            const url = new URL(event.target.href);
            const [name, id] = url.pathname.split('/').filter(a => a);
            navigator(name, id);
        }
    }

    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a href={`/details/${game._id}`} onClick={redirectHandler} className="btn details-btn">Details</a>
            </div>
        </div>
    );
}