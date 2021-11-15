export function ErrorPage({children}) {
    return (
        <section id="catalog-page">
            <h3 className="no-articles">{children || 'Error: No page found!'}</h3>
        </section>
    );
}