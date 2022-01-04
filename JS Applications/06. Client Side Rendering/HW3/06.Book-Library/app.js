import {html, render} from '../node_modules/lit-html/lit-html.js'
import {styleMap} from '../node_modules/lit-html/directives/style-map.js'

import * as api from './data.js'
import {layoutTemplate} from './main.js';

const onSubmit = {
    'add-form':onCreateSubmit,
    'edit-form':onEditSubmit
}

const ctx = {
    list: [],
    async load() {
        ctx.list = await api.getAllBooks();
        update();
    },
    onEdit(id){
        const book = ctx.list.find(b => b._id == id);
        update(book);
        
    },
    async onDelete(id){
        const confirmed = confirm('Just do it!')
        if (confirmed){
            await api.deleteBook(id)
            ctx.load()
        }
        
    }
}

document.body.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.id);
    const formData = new FormData(event.target);
    onSubmit[event.target.id](formData, event.target);
})
start();

async function start(){
    update()
}

function update(bookToEdit){
    const result = layoutTemplate(ctx, bookToEdit);
    render(result, document.body);

}

async function onCreateSubmit(formData,form){
    const book = {
        title:formData.get('title'),
        author: formData.get('author')
    };

    await api.createBook(book);
    form.reset()

}

async function onEditSubmit(formData, form){
    const id = formData.get('_id')
    const book = {
        title:formData.get('title'),
        author: formData.get('author')
    };

    await api.updateBook(id, book);
    form.reset()
    ctx.load();
    

}