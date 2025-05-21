import { createContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products.js';

export const POSContext = createContext();

export const POSProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [totalSales, setTotalSales] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [products] = useState(initialProducts);

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update cart item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Complete transaction
  const completeTransaction = () => {
    if (cart.length === 0) return;
    
    const transaction = {
      id: Date.now(),
      items: [...cart],
      total: cartTotal,
      date: new Date().toISOString(),
      paymentMethod: 'Cash' // Default payment method
    };
    
    setTransactions([transaction, ...transactions]);
    setTotalSales(totalSales + cartTotal);
    setCurrentTransaction(transaction);
    setReceiptVisible(true);
    setCart([]);
  };

  // Toggle dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [darkMode]);

  return (
    <POSContext.Provider value={{
      activeTab,
      setActiveTab,
      cart,
      setCart,
      searchTerm,
      setSearchTerm,
      selectedCategory,
      setSelectedCategory,
      totalSales,
      setTotalSales,
      transactions,
      setTransactions,
      receiptVisible,
      setReceiptVisible,
      currentTransaction,
      setCurrentTransaction,
      darkMode,
      setDarkMode,
      products,
      categories,
      filteredProducts,
      cartTotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      completeTransaction
    }}>
      {children}
    </POSContext.Provider>
  );
};