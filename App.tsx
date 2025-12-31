
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductDetail from './components/ProductDetail';
import ActionFooter from './components/ActionFooter';
import { MOCK_PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(MOCK_PRODUCTS[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedProduct = useMemo(() => 
    MOCK_PRODUCTS.find(p => p.id === selectedProductId) || MOCK_PRODUCTS[0],
  [selectedProductId]);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleApprove = (quantity: number) => {
    alert(`Order of ${quantity} units for ${selectedProduct.name} approved!`);
  };

  const handleSnooze = () => {
    alert(`Action for ${selectedProduct.name} snoozed.`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          products={filteredProducts} 
          selectedId={selectedProductId} 
          onSelect={setSelectedProductId} 
        />
        
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <ProductDetail product={selectedProduct} />
          </div>
          <ActionFooter 
            product={selectedProduct} 
            onApprove={handleApprove} 
            onSnooze={handleSnooze}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
