import * as authService from '../services/authService';
import {useNavigate} from 'react-router-dom';

import {useState} from 'react';

export function Login({loadUser}) {
    const [state, setState] = useState({username: '', password: ''});
    const navigate = useNavigate();

    function changeHandler(event) {
        const username = event.target.name;
        const value = event.target.value;
        setState(state => ({...state, [username]: value}));
    }

    function submitHandler(event) {
        event.preventDefault();
        authService.setUser(state.username);
        loadUser(state.username);
        navigate('/');
    }


    return (
        <section className="login">
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input onChange={changeHandler} type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input onChange={changeHandler} type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}