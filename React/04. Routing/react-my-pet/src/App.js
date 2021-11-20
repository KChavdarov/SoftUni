import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Create} from './components/pets/Create';
import {MyPets} from './components/pets/MyPets';
import {Register} from './components/Register';
import {Dashboard} from './components/pets/Dashboard';
import {Details} from './components/pets/Details';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import * as authService from './services/authService';

function App() {
    const [userData, setUserData] = useState({isAuthenticated: false, username: ''});

    useEffect(() => {
        loadUser();
    }, []);

    function loadUser(username) {
        if (!username) {
            username = authService.getUser();
        }
        const isAuthenticated = Boolean(username);
        setUserData(() => ({username, isAuthenticated}));
    }

    function logout() {
        authService.removeUser();
        loadUser('');
    }

    return (
        <BrowserRouter>
            <div id="container">
                <Header logout={logout} {...userData} />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login loadUser={loadUser} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/pets">
                            <Route path="" element={<Dashboard />} />
                            <Route path="details/:petId" element={<Details />} />
                            <Route path="create" element={<Create />} />
                            <Route path="my-pets" element={<MyPets />} />
                        </Route>
                        <Route path="/*" element={<Navigate to="/" />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;