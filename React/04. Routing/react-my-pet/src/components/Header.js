import {NavLink} from 'react-router-dom';

export function Header({username, isAuthenticated, logout}) {

    const guestNav = (
        <section className="navbar-anonymous">
            <ul>
                <li><NavLink className={(navData => navData.isActive ? 'active-nav' : '')} to="/register"><i className="fas fa-user-plus"></i> Register</NavLink></li>
                <li><NavLink className={(navData => navData.isActive ? 'active-nav' : '')} to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink></li>
            </ul>
        </section>
    );

    const userNav = (
        <section className="navbar-dashboard">
            <div className="first-bar">
                <NavLink to="/pets">Dashboard</NavLink>
                <NavLink className={(navData => navData.isActive ? 'active-nav button' : 'button')} to="/pets/my-pets">My Pets</NavLink>
                <NavLink className={(navData => navData.isActive ? 'active-nav button' : 'button')} to="/pets/create">Add Pet</NavLink>
            </div>
            <div className="second-bar">
                <ul>
                    <li>Welcome, {username}!</li>
                    <li><a onClick={logout} ><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </div>
        </section>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                {isAuthenticated ? userNav : guestNav}
            </nav>
        </header>
    );
}