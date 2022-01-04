import { render } from '../node_modules/lit-html/lit-html.js';
import * as api from './api.js';
import { layout } from './templates.js';

const context = {
    books: [],

    async load() {
        const books = await api.getAllBooks();
        context.books = books;
        render(layout(context), document.body);
    },

    async onEdit(id) {
        // const book = await api.getBookById(id);
        const book = context.books.find(b => b._id == id);
        update(book);
    },

    async onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this book?');
        if (confirmed) {
            await api.deleteBook(id);
            alert('Book deleted successfully');
            context.load();
        }
    },

    onCancel() {
        update();
    }
};

document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    onSubmit[form.getAttribute('id')](formData, form);
});

const onSubmit = {
    async 'add-form'(formData, form) {
        const author = formData.get('author');
        const title = formData.get('title');
        await api.createBook({ author, title });
        form.reset();
        context.load();
    },

    async 'edit-form'(formData, form) {
        const id = formData.get('id');
        const author = formData.get('author');
        const title = formData.get('title');
        await api.editBook(id, { author, title });
        form.reset();
        update();
        context.load();
    }
};

update();

function update(bookToEdit) {
    render(layout(context, bookToEdit), document.body);
}