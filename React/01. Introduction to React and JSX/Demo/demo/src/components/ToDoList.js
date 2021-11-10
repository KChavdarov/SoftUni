import {useState} from 'react';
import {ToDoListItem} from '../ToDoListItem';
import {Counter} from './Counter';

let oneTask = 'Finish all tasks';

export function ToDoList() {
    const [tasks] = useState(['Clean your room', 'Go shopping', 'Do stuff']);
    const [count, updateCount] = useState(0);

    function onBtnClick() {
        updateCount((state) => state + 1);
    }

    return (
        <>
            <ul>
                {tasks.map((t, i) => (<ToDoListItem key={i} index={i} >{t}</ToDoListItem>))}
                <ToDoListItem person={{name: 'Pesho', age: 32}}>{oneTask}</ToDoListItem>
            </ul>
            <Counter>{count}</Counter>
            <button onClick={onBtnClick}>+</button>
        </>
    );
}
