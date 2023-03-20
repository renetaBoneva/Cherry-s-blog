export function ErrorPage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#E78DBD';

    return (
        <main>
            <section id="errorSection" className="wrapper">
                <h2>404 Not found</h2>
                <img src="img/404.png" alt="errorImg" />
            </section>
        </main>
    );
}