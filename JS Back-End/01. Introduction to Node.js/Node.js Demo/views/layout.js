module.exports = (html, title = 'Welcome') => `
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/about">About</a>
        </nav>
        ${html}
    </body>
</html>
`;