import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog page</h2><p>List of recent articles <a href="/catalog/123">Article 123</a></p>',
    '/about': '<h2>About us</h2><p>Contact information</p>',
    '/catalog/123': '<h2>Article 123</h2><p>Detailed information about article 123</p>',
    '/buy': '<h2>Item bought</h2>',
};

const defaultPage = '<h2>404</h2><p>Page not found</p>';

const main = document.querySelector('main');


page('/home', updateContext);
page('/catalog', updateContext);
page('/catalog/:id', itemDetails);
page('/about', updateContext);
page('/buy', updateContext);
page.redirect('/', '/home');
page.start();


function updateContext(context) {
    console.log(context);
    main.innerHTML = pages[context.pathname] || defaultPage;
}

function itemDetails(context) {
    const id = context.params.id;
    const html = `<h2>Item ${id}</h2><p>Details for item ${id}</p><button>Buy</button>`;
    main.innerHTML = html;

    document.querySelector('button').addEventListener('click', event => {
        context.page.redirect('/buy');
    });
}