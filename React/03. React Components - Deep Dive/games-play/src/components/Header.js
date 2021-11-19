import {NavLink} from 'react-router-dom';

export function Header() {
    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeClassName="active-nav" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeClassName="active-nav" to="/create">Create Game</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeClassName="active-nav" to="/login">Login</NavLink>
                    <NavLink activeClassName="active-nav" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
}