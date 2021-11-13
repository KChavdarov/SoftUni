import './ToDoItem.css';
import {useEffect} from 'react';

export function ToDoItem({todo: {_id, text, isDone}, onDelete, toggleDone}) {
    useEffect(() => {
        console.log('mounted: ' + _id);
        return () => {
            console.log('unmounted: ' + _id);
        };
    }, [_id]);

    return (
        <li onClick={toggleDone} className={['toDoItem', (isDone ? 'done' : null)].filter(a => a).join(' ')}>
            {text}
            <button onClick={onDelete}>x</button>
        </li>
    );
}