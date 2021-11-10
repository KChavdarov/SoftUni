export function Counter({children}) {
    let color = '';

    if (children < 3) {
        color = 'green';
    }
    
    return <p style={{color}}>{children}</p>;
}