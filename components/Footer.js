function Footer() {
    try {
        return (
            <footer className="bg-dark text-white py-8" data-name="footer">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0" data-name="footer-logo">
                            <h3 className="text-xl font-bold">Mi Catálogo</h3>
                        </div>
                        
                        <div className="flex space-x-6" data-name="social-links">
                            <a href="#" className="text-2xl hover:text-accent" data-name="facebook-link">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-accent" data-name="instagram-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-accent" data-name="whatsapp-link">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm" data-name="footer-copyright">
                        <p>© 2025 TuDespensa.25. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
