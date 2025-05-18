import { useContext } from 'react';
import { POSContext } from '../context/POSContext';
import { SearchBar } from '../components/pos/SearchBar';
import { CategoryFilter } from '../components/pos/CategoryFilter';
import { ProductCard } from '../components/pos/ProductCard';

export const ProductsPage = () => {
  const { filteredProducts } = useContext(POSContext);

  return (
    <div>
      {/* Search and Category Filter */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <SearchBar />
        <CategoryFilter />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};