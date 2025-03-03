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
