import { html } from '../node_modules/lit-html/lit-html.js';

const addForm = () => html `
    <form id="add-form" >
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

const editForm = (book) => html `
    <form id="edit-form" >
        <input type="hidden" name="id" .value=${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${book.title} >
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${book.author} >
        <input type="submit" value="Save">
        <button class="cancelBtn">Cancel</button>
    </form>`;

const table = (context) => html `
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody @click=${event => onClick(event, context)}>
            ${context.books.map(tableRow)}
        </tbody>
    </table>`;

const tableRow = (book) => html `
    <tr data-id="${book._id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    </tr>`;

export const layout = (context, bookToEdit) => {
    const result = html `
    <button id="loadBooks" @click=${context.load}>LOAD ALL BOOKS</button>
    ${table(context)}
    ${bookToEdit ? editForm(bookToEdit) : addForm()}
    `;
    return result;
};

function onClick(event, context) {
    if (event.target.classList.contains('editBtn')) {
        const id = event.target.parentNode.parentNode.dataset.id;
        context.onEdit(id);
    } else if (event.target.classList.contains('deleteBtn')) {
        const id = event.target.parentNode.parentNode.dataset.id;
        context.onDelete(id);
    } else if (event.target.classList.contains('cancelBtn')) {
        context.onCancel();
    }
}