import './App.css';
import {ToDoList} from './components/ToDoList.js';

function App() {
    return (
        <div className="App">
            <h1>Demo React App</h1>
            <main>
                <h2>Tasks</h2>
                <ToDoList />
            </main>
            <footer>
                <p>All rights reserved &copy;</p>
            </footer>
        </div>
    );
}

export default App;