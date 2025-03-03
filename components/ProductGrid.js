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
