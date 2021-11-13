import {useState, useEffect} from 'react';
import {ToDoItem} from './ToDoItem';
import * as api from '../services/toDoService';

export function ToDoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log('mounted list');
        (async () => {
            const data = await api.getToDos();
            setTodos(data);
        })();
    }, []);

    console.log('rendered list');

    async function onInputBlur(event) {
        let data = {
            text: event.target.value,
            isDone: false,
        };
        event.target.value = '';
        const todo = await api.createToDo(data);

        setTodos((todos) => [...todos, todo]);
    }

    async function toDoItemDeleteHandler(id) {
        await api.deleteToDo(id);
        setTodos(todos => todos.filter(t => t._id !== id));
    }

    async function toggleDone(todo) {
        const data = Object.assign({}, todo, {isDone: !todo.isDone});
        const updated = await api.updateToDo(todo.id, data);

        setTodos(todos => todos.map(t => {
            if (t._id === updated.id) {
                return updated;
            }
            return t;
        }));
    }

    return (
        <>
            <input type="text" onBlur={onInputBlur} />
            <ul>
                {todos.map((todo) =>
                    <ToDoItem
                        key={todo._id}
                        todo={todo}
                        onDelete={(event) => {event.stopPropagation(); toDoItemDeleteHandler(todo._id);}}
                        toggleDone={() => toggleDone(todo)}
                    />)}
            </ul>
        </>
    );
}