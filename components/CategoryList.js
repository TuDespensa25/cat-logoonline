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
