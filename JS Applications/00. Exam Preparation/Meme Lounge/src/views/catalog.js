import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getAllItems, getItemCount, searchMeme, searchResultCount } from '../api/data.js';
import { loader } from '../common/loader.js';


const catalogTemplate = (memes, page, pages, search) => html `
<section id="meme-feed">
    <h1>${search ? `Results for "${search}"` : 'All Memes'}</h1>
    ${pages > 0? createPager(page, pages, search): ''}
    <div id="memes">
        ${memes.length == 0 ? html`
        <p class="no-memes">No memes in database.</p>`:
        memes.map(memeTemplate)}
    </div>
</section>`;

const memeTemplate = (meme) => html `
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}" >Details</a>
        </div>
    </div>
</div>`;

function createPager(page, pages, search) {
    if (search) {
        return html `<div class="pager">
        ${page > 1 ? html`<a href="/catalog?search=${search}&page=${page - 1}">&lt; Prev</a>`: ''}
        | Page ${page} of ${pages} |
        ${page < pages ? html`<a href="/catalog?search=${search}&page=${page + 1}">Next &gt;</a>` : ''}
        </div>`;
    } else {
        return html `<div class="pager">
        ${page > 1 ? html`<a href="/catalog?page=${page - 1}">&lt; Prev</a>`: ''}
        | Page ${page} of ${pages} |
        ${page < pages ? html`<a href="/catalog?page=${page + 1}">Next &gt;</a>` : ''}
        </div>`;
    }
}

async function loadMemes(context) {
    let memes, totalCount, search, page;

    if (context.querystring.includes('search')) {
        const tokens = context.querystring.split('&');
        search = tokens[0].split('=')[1];
        page = Number(tokens[1].split('=')[1]);

        [memes, totalCount] = await Promise.all([
            searchMeme(search, page),
            searchResultCount(search)
        ]);

    } else {
        page = Number(context.querystring.split('=')[1]) || 1;

        [memes, totalCount] = await Promise.all([
            getAllItems(page),
            getItemCount()
        ]);
    }

    const pages = Math.ceil(totalCount / 4);

    console.log(page);
    console.log(pages);

    if (pages > 0 && page > pages) {
        context.page.redirect('/catalog');
    }

    return catalogTemplate(memes, page, pages, search);
}


export function catalogPage(context) {
    context.render(until(loadMemes(context), loader));
}