/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import {Header} from './components/Header';
import {WelcomeWorld} from './components/WelcomeWorld/WelcomeWorld';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {GameCreate} from './components/GameCreate';
import {GameEdit} from './components/GameEdit';
import {GameDetails} from './components/GameDetails';
import {GameCatalogue} from './components/GameCatalogue';

function App() {
  return (
    <div className="App">

      <div id="box">

        <Header />

        <main id="main-content">
        </main>

        <WelcomeWorld />
        <Login />
        <Register />
        <GameCreate />
        <GameEdit />
        <GameDetails />
        <GameCatalogue />

      </div>


    </div>
  );
}

export default App;