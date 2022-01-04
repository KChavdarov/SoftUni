import {html, render} from '../node_modules/lit-html/lit-html.js'


const listTemplate = (data) => html`
<ul>
    ${data.map(t=> html`<li>${t}</li>`)}
</ul>
`
//click
document.getElementById('btnLoadTowns').addEventListener('click', updateList) 

function updateList(event){
    event.preventDefault()
    //parse
    const townAsString = document.getElementById('towns').value;

    if (townAsString == ''){
        alert('You should type a town.')
        return
    }

    const towns = townAsString.split(',').map(x=>x.trim());
    //execute
    const result = listTemplate(towns);
    const root = document.getElementById('root');
    //rendur
    render(result, root)

}

