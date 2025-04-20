function layout(title, page) {
    return `
        <html>
            <head>
                <title>
                    ${title}
                </title>
            </head>
            <body>
                <nav>
                    <a href="/">Home<a/>
                    <a href="/catalog">Catalog<a/>
                    <a href="/about">About<a/>
                </nav>
                ${page}
            </body>
        </html>`
}

module.exports = layout;