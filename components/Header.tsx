
import React from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="flex-none bg-white border-b border-slate-200 h-16 px-6 flex items-center justify-between z-20 relative">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-slate-900">
          <div className="w-8 h-8 text-primary bg-blue-50 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined !text-[24px]">inventory_2</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">StockFlow</h2>
        </div>
        
        <div className="hidden md:flex items-center min-w-64 h-10">
          <div className="flex w-full items-stretch rounded-lg bg-slate-50 border border-slate-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <div className="text-slate-400 flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="w-full bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:ring-0 text-sm h-full px-3" 
              placeholder="Search SKU, Product..." 
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden lg:flex items-center gap-6">
          <a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
          <a className="text-slate-900 text-sm font-medium" href="#">Inventory</a>
          <a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Orders</a>
          <a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Settings</a>
        </nav>
        <div className="h-6 w-px bg-slate-200 hidden lg:block"></div>
        <button className="flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full w-9 h-9 border border-slate-200 cursor-pointer" 
          style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=1")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
