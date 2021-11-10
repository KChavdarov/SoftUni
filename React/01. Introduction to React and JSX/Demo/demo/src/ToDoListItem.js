let colors = ['magenta', 'yellow', 'cyan'];

export function ToDoListItem({children, index, person}) {
    return (
        <li style={{color: colors[index]}}>{children} - {index} {person?.name}</li>
    );
}