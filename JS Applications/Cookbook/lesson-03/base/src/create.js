const createForm = document.getElementById('createForm');

createForm.addEventListener('submit', onCreateSubmit)

async function onCreateSubmit(event) {
    event.preventDefault();
    const formData = new FormData(createForm);
    // console.log();

    const data = [...formData.entries()].reduce((a, [key, value]) => {
        a[key] = value;
        return a;
    }, {});
    data['ingredients'] = data['ingredients'].split('\n').map(a => a.trim()).filter(a => a);
    data['steps'] = data['steps'].split('\n').map(a => a.trim()).filter(a => a);
    let recipe = await createRecipe(data);
    window.location.pathname = 'index.html'
}

async function createRecipe(data) {
    const token = sessionStorage.getItem('userToken');
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(data),
    }

    const response = await fetch('http://localhost:3030/data/recipes/', options);
    if (!response.ok) {
        const err = response.json();
        return alert(err.message);
    }
    await response.json();
}