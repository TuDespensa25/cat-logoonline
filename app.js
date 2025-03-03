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

function CategoryList({ onSelectCategory, selectedCategory }) {
    try {
        const categories = [
            { id: 'all', name: 'Todos' },
            { id: 'alimentos', name: 'Alimentos' },
            { id: 'aseo', name: 'Productos de Aseo' },
            { id: 'electrodomesticos', name: 'Electrodomésticos' }
        ];

        return (
            <div className="mb-8" data-name="category-list">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => onSelectCategory(category.id)}
                            className={`category-card px-6 py-3 ${
                                selectedCategory === category.id ? 'bg-primary text-white' : 'bg-white text-primary'
                            }`}
                            data-name={`category-${category.id}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('CategoryList component error:', error);
        reportError(error);
        return null;
    }
}

function ProductCard({ product }) {
    try {
        return (
            <div className="product-card p-4" data-name={`product-${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    data-name="product-image"
                />
                <h3 className="text-lg font-semibold mb-2" data-name="product-name">{product.name}</h3>
                <p className="text-gray-600" data-name="product-description">{product.description}</p>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}

function ProductGrid({ category }) {
    try {
        const products = category === 'all' 
            ? sampleProducts 
            : sampleProducts.filter(p => p.category === category);

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-name="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
        return null;
    }
}

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
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm" data-name="footer-copyright">
                        <p>© 2024 Mi Catálogo. Todos los derechos reservados.</p>
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

function FloatingWhatsApp() {
    try {
        const handleWhatsAppClick = () => {
            const message = "Hola, me gustaría obtener más información sobre sus productos";
            const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <button 
                onClick={handleWhatsAppClick}
                className="floating-whatsapp"
                data-name="floating-whatsapp"
                aria-label="Contactar por WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </button>
        );
    } catch (error) {
        console.error('FloatingWhatsApp component error:', error);
        reportError(error);
        return null;
    }
}

function Catalog() {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState('all');

        return (
            <div className="max-w-7xl mx-auto px-4" data-name="catalog-page">
                <h2 className="text-3xl font-bold text-center mb-12" data-name="catalog-title">
                    Nuestros Productos
                </h2>
                <CategoryList 
                    onSelectCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
                <ProductGrid category={selectedCategory} />
            </div>
        );
    } catch (error) {
        console.error('Catalog page error:', error);
        reportError(error);
        return null;
    }
}

function Home() {
    try {
        return (
            <div data-name="home-page">
                <Hero />
                <div className="py-16" id="catalog">
                    <Catalog />
                </div>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}

const sampleProducts = [
    {
        id: 1,
        name: "Aceite de Oliva Extra Virgen",
        description: "Aceite de primera calidad, prensado en frío, ideal para ensaladas y cocina.",
        category: "alimentos",
        image: "images/aceite.jpg"
    },
    {
        id: 2,
        name: "Detergente Multiusos",
        description: "Limpiador concentrado para todo tipo de superficies.",
        category: "aseo",
        image: "images/detergente.jpg"
    },
    {
        id: 3,
        name: "Licuadora Profesional",
        description: "Potente licuadora con múltiples velocidades y vaso de vidrio.",
        category: "electrodomesticos",
        image: "images/licuadora.jpg"
    },
    {
        id: 4,
        name: "Arroz Premium",
        description: "Arroz de grano largo, perfecto para todo tipo de preparaciones.",
        category: "alimentos",
        image: "images/arroz.jpg"
    },
    {
        id: 5,
        name: "Jabón de Manos",
        description: "Jabón líquido antibacterial con aroma a lavanda.",
        category: "aseo",
        image: "images/jabon.jpg"
    },
    {
        id: 6,
        name: "Cafetera Automática",
        description: "Cafetera programable con filtro permanente y jarra de vidrio.",
        category: "electrodomesticos",
        image: "images/cafetera.jpg"
    }
];

function App() {
    try {
        return (
            <div className="min-h-screen flex flex-col" data-name="app">
                <Navbar />
                <main className="flex-grow">
                    <Home />
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
