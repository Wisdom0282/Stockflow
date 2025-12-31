
import React from 'react';
import { Product, ConfidenceLevel } from '../types';

interface SidebarProps {
  products: Product[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ConfidenceBadge: React.FC<{ level: ConfidenceLevel }> = ({ level }) => {
  let styles = "";
  let iconColor = "";

  switch (level) {
    case 'High':
      styles = "text-emerald-700 bg-emerald-50";
      iconColor = "text-emerald-500";
      break;
    case 'Medium':
      styles = "text-slate-600 bg-slate-100";
      iconColor = "text-amber-400";
      break;
    case 'Low':
      styles = "text-amber-700 bg-amber-50";
      iconColor = "text-amber-500";
      break;
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`material-symbols-outlined text-[10px] ${iconColor} filled`}>circle</span>
      <span className={`text-xs font-medium px-2 py-0.5 rounded ${styles}`}>{level} Confidence</span>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ products, selectedId, onSelect }) => {
  return (
    <aside className="w-[350px] md:w-[30%] max-w-[420px] flex-none border-r border-slate-200 bg-white flex flex-col z-10">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <h1 className="text-slate-900 text-sm font-semibold flex items-center gap-2">
          Action Required 
          <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">
            {products.length}
          </span>
        </h1>
        <div className="flex items-center gap-1 text-xs text-slate-500 cursor-pointer hover:text-slate-800">
          <span>Sort by: Urgency</span>
          <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => onSelect(product.id)}
            className={`group relative flex flex-col gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
              selectedId === product.id 
                ? 'border-primary/30 bg-blue-50/40 shadow-sm ring-1 ring-primary/20' 
                : 'border-transparent hover:bg-slate-50 hover:border-slate-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <ConfidenceBadge level={product.confidence} />
              <span className="text-xs text-slate-400">{product.timestamp}</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-sm leading-tight mb-1">{product.name}</h3>
              <p className={`text-xs font-medium flex items-center gap-1 ${
                product.riskMessage.includes('Risk') ? 'text-red-600' : 'text-slate-500'
              }`}>
                {product.riskMessage.includes('Risk') && (
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                )}
                {product.riskMessage}
              </p>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <span className="material-symbols-outlined text-4xl mb-2">inventory</span>
            <p className="text-sm">No items matching your search</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
