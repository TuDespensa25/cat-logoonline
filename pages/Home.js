function Home() {
    try {
        return (
            <div data-name="home-page">
                <Hero />
                <div className="py-16" id="catalog">
                    <Catalog />
                </div>
                <FAQ />
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
