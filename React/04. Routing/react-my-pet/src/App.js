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

function App() {
    return (
        <BrowserRouter>
            <div id="container">
                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/pets">
                            <Route path="" element={<Navigate to="dashboard" />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="details" element={<Details />} />
                            <Route path="create" element={<Create />} />
                            <Route path="my-pets" element={<MyPets />} />
                        </Route>
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

{/* <section className="myPet">
<h3>Name: Pesho</h3>
<p>Category: Cat</p>
<p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" /></p>
<p className="description">This is my cat Pesho</p>
<div className="pet-info">
    <a href="#"><button className="button">Edit</button></a>
    <a href="#"><button className="button">Delete</button></a>
    <i className="fas fa-heart"></i> <span>5</span>
</div>
</section>
<section className="deletePet">
<h3>Pesho</h3>
<p>Pet counter: <i className="fas fa-heart"></i> 5</p>
<p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" /></p>
<form action="#" method="POST">
    <p className="description">This is my cat Pesho</p>
    <button className="button">Delete</button>
</form>
</section>
<section className="detailsMyPet">
<h3>Koko</h3>
<p>Pet counter: <i className="fas fa-heart"></i> 6</p>
<p className="img"><img src="https://www.freepngimg.com/thumb/parrot/2-parrot-png-images-download-thumb.png" /></p>
<form action="#" method="POST">
    <textarea type="text" name="description" defaultValue="This is my parrot Koko"></textarea>
    <button className="button"> Save</button>
</form>
</section> */}

export default App;
