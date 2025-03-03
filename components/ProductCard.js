function ProductCard({ product }) {
    try {
        const handleWhatsAppClick = () => {
            const message = `Hola, me interesa el producto: ${product.name}`;
            const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <div className="product-card p-4" data-name={`product-${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    data-name="product-image"
                />
                <h3 className="text-lg font-semibold mb-2" data-name="product-name">{product.name}</h3>
                <p className="text-gray-600 mb-4" data-name="product-description">{product.description}</p>
                <button 
                    onClick={handleWhatsAppClick}
                    className="btn-whatsapp w-full flex items-center justify-center gap-2"
                    data-name="whatsapp-button"
                >
                    <i className="fab fa-whatsapp"></i>
                    Consultar Precio
                </button>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}
