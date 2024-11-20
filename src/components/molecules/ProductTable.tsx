interface Product {
    image: string;
    name: string;
    description: {
        sleeveType: string;
        style: string;
        color: string;
    };
    price: number;
}

const products: Product[] = [
    {
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=60",
        name: "Classic Blue Oxford Shirt",
        description: {
            sleeveType: "Long Sleeve",
            style: "Button-Down",
            color: "Light Blue"
        },
        price: 12.99
    },
    {
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60",
        name: "White Linen Casual Shirt",
        description: {
            sleeveType: "Short Sleeve",
            style: "Regular Fit",
            color: "White"
        },
        price: 14.99
    },
    {
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=60",
        name: "Striped Cotton Dress Shirt",
        description: {
            sleeveType: "Long Sleeve",
            style: "Slim Fit",
            color: "Blue Stripe"
        },
        price: 10.99
    }
];

export const ProductTable = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Products</h2>
                <a href="#" className="text-gray-500 underline text-sm hover:text-gray-700">
                    View all
                </a>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#F5F5DC] border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Description</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-6 py-4">
                                    <div className="h-20 w-20 rounded-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-700 space-y-1">
                                        <p>Details:</p>
                                        <p>Sleeve Type: {product.description.sleeveType}</p>
                                        <p>Style: {product.description.style}</p>
                                        <p>Color: {product.description.color}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    ${product.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}; 