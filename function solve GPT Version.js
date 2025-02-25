function solve(products) {
    function getProductsByCategory(category) {
        return products.filter(product => product.category === category);
    }

    function addProduct(id, name, category, price, stock) {
        products.push({ id, name, category, price, stock });
        return products;
    }

    function getProductById(id) {
        const product = products.find(product => product.id === id);
        return product || `Product with ID ${id} not found`;
    }

    function removeProductById(id) {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            return products;
        }
        return `Product with ID ${id} not found`;
    }

    function updateProductPrice(id, newPrice) {
        const product = products.find(product => product.id === id);
        if (product) {
            product.price = newPrice;
            return products;
        }
        return `Product with ID ${id} not found`;
    }

    function updateProductStock(id, newStock) {
        const product = products.find(product => product.id === id);
        if (product) {
            product.stock = newStock;
            return products;
        }
        return `Product with ID ${id} not found`;
    }

    return {
        getProductsByCategory,
        addProduct,
        getProductById,
        removeProductById,
        updateProductPrice,
        updateProductStock
    };
}

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 30 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Headphones", category: "Accessories", price: 150, stock: 100 }
  ];
  
  const store = solve(products);
  console.log(store.getProductsByCategory("Electronics"));
  console.log(store.addProduct(4, "Tablet", "Electronics", 300, 7));
  console.log(store.getProductById(1));
  console.log(store.removeProductById(2));
  console.log(store.updateProductPrice(3, 350));
  console.log(store.updateProductStock(10, 8));