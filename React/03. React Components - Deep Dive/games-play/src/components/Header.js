import {NavLink} from 'react-router-dom';

export function Header() {
    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink to="/games">All games</NavLink>
                <div id="user">
                    <NavLink to="/create">Create Game</NavLink>
                    <NavLink to="#">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
}