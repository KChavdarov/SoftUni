import './App.css';
import {useState} from 'react';
import {Header} from './components/Header';
import {WelcomeWorld} from './components/WelcomeWorld/WelcomeWorld';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {GameCreate} from './components/GameCreate';
import {GameEdit} from './components/GameEdit';
import {GameDetails} from './components/GameDetails';
import {GameCatalogue} from './components/GameCatalogue';
import {ErrorPage} from './components/Error';


function App() {
  let [page, setPage] = useState({name: 'home'});

  const routes = {
    home: () => <WelcomeWorld navigator={navigator} />,
    'welcome-world': () => <WelcomeWorld navigator={navigator} />,
    login: () => <Login />,
    register: () => <Register />,
    create: () => <GameCreate />,
    edit: (id) => <GameEdit id={id} navigator={navigator} />,
    details: (id) => <GameDetails id={id} navigator={navigator} />,
    catalogue: () => <GameCatalogue navigator={navigator} />,
    error: () => <ErrorPage />
  };

  function navigator(name, id) {
    setPage(() => ({name, id}));
  }

  return (
    <div className="App">
      <div id="box">
        <Header navigator={navigator} />

        <main id="main-content">
          {(routes[page.name] || routes['error'])(page.id)}
        </main>

      </div>
    </div>
  );
}

export default App;