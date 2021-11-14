export function Header() {
    return (
        <header>
            <h1><a className="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/welcome-world">All games</a>
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