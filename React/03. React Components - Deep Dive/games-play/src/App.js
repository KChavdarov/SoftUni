import './App.css';
import {Route} from 'react-router';
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
  return (
    <div className="App">
      <div id="box">
        <Header navigator={navigator} />

        <main id="main-content">
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/home" exact component={WelcomeWorld} />
          <Route path="/welcome-world" exact component={WelcomeWorld} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/games" exact component={GameCatalogue} />
          <Route path="/games/:id" component={GameDetails} />
          <Route path="/create" component={GameCreate} />
          <Route path="/edit/:id" component={GameEdit} />
          <Route path="/error" component={ErrorPage} />
        </main>

      </div>
    </div>
  );
}

export default App;