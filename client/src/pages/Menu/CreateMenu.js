import React, { useState } from 'react';
import { Plus, Trash2, Edit2, ChevronDown, ChevronUp } from 'lucide-react';

const CreateMenu = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

    const [currentItem, setCurrentItem] = useState({
        name: '',
        description: '',
        fullPrice: '',
        halfPrice: '',
        hasHalfOption: false
    });

    // Category Management
    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategory.trim()) {
            setCategories([...categories, {
                id: Date.now(),
                name: newCategory.trim(),
                items: []
            }]);
            setNewCategory('');
        }
    };

    const handleDeleteCategory = (categoryId) => {
        setCategories(categories.filter(cat => cat.id !== categoryId));
    };

    // Item Management
    const handleAddItem = (categoryId) => {
        if (currentItem.name && (currentItem.fullPrice || currentItem.halfPrice)) {
            const updatedCategories = categories.map(cat => {
                if (cat.id === categoryId) {
                    return {
                        ...cat,
                        items: [...cat.items, { ...currentItem, id: Date.now() }]
                    };
                }
                return cat;
            });
            setCategories(updatedCategories);
            setCurrentItem({
                name: '',
                description: '',
                fullPrice: '',
                halfPrice: '',
                hasHalfOption: false
            });
        }
    };

    const handleDeleteItem = (categoryId, itemId) => {
        const updatedCategories = categories.map(cat => {
            if (cat.id === categoryId) {
                return {
                    ...cat,
                    items: cat.items.filter(item => item.id !== itemId)
                };
            }
            return cat;
        });
        setCategories(updatedCategories);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Category Creation Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Add Menu Category</h2>
                <form onSubmit={handleAddCategory} className="flex gap-4">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Enter category name"
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Add Category
                    </button>
                </form>
            </div>

            {/* Categories List with Items */}
            <div className="space-y-4">
                {categories.map(category => (
                    <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Category Header */}
                        <div className="p-4 bg-gray-50 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                                    className="p-1 hover:bg-gray-200 rounded"
                                >
                                    {expandedCategory === category.id ? (
                                        <ChevronUp className="h-5 w-5" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5" />
                                    )}
                                </button>
                                <button
                                    onClick={() => handleDeleteCategory(category.id)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Category Content */}
                        {expandedCategory === category.id && (
                            <div className="p-4 space-y-6">
                                {/* Add Item Form */}
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="text-md font-medium mb-4">Add New Item</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Item Name
                                            </label>
                                            <input
                                                type="text"
                                                value={currentItem.name}
                                                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                value={currentItem.description}
                                                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Price
                                            </label>
                                            <input
                                                type="number"
                                                value={currentItem.fullPrice}
                                                onChange={(e) => setCurrentItem({ ...currentItem, fullPrice: e.target.value })}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                min="0"
                                                step="0.01"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={currentItem.hasHalfOption}
                                                    onChange={(e) => setCurrentItem({ ...currentItem, hasHalfOption: e.target.checked })}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">Has half portion option</span>
                                            </label>
                                            {currentItem.hasHalfOption && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Half Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={currentItem.halfPrice}
                                                        onChange={(e) => setCurrentItem({ ...currentItem, halfPrice: e.target.value })}
                                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                        min="0"
                                                        step="0.01"
                                                        required
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem(category.id)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Add Item
                                        </button>
                                    </div>
                                </div>

                                {/* Items List */}
                                <div className="space-y-2">
                                    {category.items.map(item => (
                                        <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                            <div>
                                                <h5 className="font-medium">{item.name}</h5>
                                                {item.description && (
                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                )}
                                                <div className="text-sm text-gray-600">
                                                    Full Price: ₹{item.fullPrice}
                                                    {item.hasHalfOption && ` | Half Price: ₹${item.halfPrice}`}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteItem(category.id, item.id)}
                                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateMenu;