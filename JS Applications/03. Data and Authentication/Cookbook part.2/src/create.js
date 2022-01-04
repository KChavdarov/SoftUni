document.getElementById('createForm').addEventListener('submit', onCreateSubmit);

async function onCreateSubmit(event) {
    const token = sessionStorage.getItem('userToken');
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = [...formData.entries()];

    if (formEntries.some(a => a == '')) {
        return alert('All fields are mandatory!');
    }
    console.log(formEntries);
    const name = formData.get('name');
    const img = formData.get('img');
    const ingredients = formData.get('ingredients').split('\n').map(i => i.trim());
    const steps = formData.get('steps').split('\n').map(s => s.trim());

    const response = await fetch('http://localhost:3030/data/recipes', {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify({ name, img, ingredients, steps })
    });
    const data = await response.json();
    if (!response.ok) {
        return alert(data.message);
    }

    window.location.pathname = '/Cookbook part.2/index.html';
}