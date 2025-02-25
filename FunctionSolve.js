function solve(products) {
  function getProductsByCategory(category) {
    return filteredProducts = products.filter(product => product.category === category);    
  }

  function addProduct(id, name, category, price, stock) {
    let newProduct = { id, name, category, price, stock }
    products.push(newProduct);
    return products;
  }
  function getProductById(id) {
    const searchedProduct = products.find(product => product.id === id);

    if (searchedProduct === undefined) {
      return `Product with ID ${id} not found`;
    }
    else {
      return searchedProduct;

    }

  }

  function removeProductById(id) {
    const initialLength = products.length;
    products = products.filter(product => product.id !== id);
    if (initialLength == products.length) {
      return `Product with ID ${id} not found`
    }
    else {
      return products
    }
  }

  function updateProductPrice(id, newPrice) {
    const product = products.find(product => product.id === id);
    if(product){
      product.price = newPrice;
      return products;
    }
    else{
      return `Product with ID ${id} not found`;
    }
  }

  function updateProductStock(id, newStock) {
    const product = products.find(product => product.id === id);
    if(product){
      product.stock = newStock;
      return products;
    }
    else{
      return `Product with ID ${id} not found`;
    }
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
const updateStock = store.updateProductStock(1, 20);
console.log(JSON.stringify(updateStock));