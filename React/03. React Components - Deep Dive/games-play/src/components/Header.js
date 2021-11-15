export function Header({navigator}) {
    function redirectHandler(event) {
        if (event && event.target.tagName === 'A') {
            event.preventDefault();
            const url = new URL(event.target.href);
            const [name, id] = url.pathname.split('/').filter(a => a);
            navigator(name, id);
        }
    }

    return (
        <header onClick={redirectHandler}>
            <h1><a className="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/catalogue">All games</a>
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="#">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}