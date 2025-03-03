function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav className="bg-white shadow-md" data-name="navbar">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-2xl font-bold text-primary" data-name="logo">
                                Mi Catálogo
                            </a>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#" className="text-gray-700 hover:text-primary" data-name="nav-home">Inicio</a>
                            <a href="#catalog" className="text-gray-700 hover:text-primary" data-name="nav-catalog">Catálogo</a>
                            <a href="#faq" className="text-gray-700 hover:text-primary" data-name="nav-faq">FAQ</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700" data-name="mobile-menu-button">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden pb-4" data-name="mobile-menu">
                            <a href="#" className="block py-2 text-gray-700" data-name="mobile-nav-home">Inicio</a>
                            <a href="#catalog" className="block py-2 text-gray-700" data-name="mobile-nav-catalog">Catálogo</a>
                            <a href="#faq" className="block py-2 text-gray-700" data-name="mobile-nav-faq">FAQ</a>
                        </div>
                    )}
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
