function Hero() {
    try {
        return (
            <section className="hero-section py-20 text-white" data-name="hero">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-name="hero-title">
                            Bienvenidos a Tu Tienda de Confianza
                        </h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto" data-name="hero-description">
                            Descubre nuestra amplia selección de productos de calidad para tu hogar y familia
                        </p>
                        <a href="#catalog" className="btn-primary text-lg" data-name="hero-cta">
                            Ver Catálogo
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
