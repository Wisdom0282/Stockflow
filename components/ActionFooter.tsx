
import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ActionFooterProps {
  product: Product;
  onApprove: (quantity: number) => void;
  onSnooze: () => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({ product, onApprove, onSnooze }) => {
  const [quantity, setQuantity] = useState(product.recommendation.quantity);

  // Sync quantity when product changes
  useEffect(() => {
    setQuantity(product.recommendation.quantity);
  }, [product]);

  const totalCost = quantity * product.unitPrice;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-30">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Confirm Quantity</label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(0, quantity - 10))}
                className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-l-lg hover:bg-slate-50 text-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input 
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                className="w-24 h-10 border-y border-slate-200 text-center text-sm font-bold focus:ring-0 focus:border-slate-200"
              />
              <button 
                onClick={() => setQuantity(quantity + 10)}
                className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-r-lg hover:bg-slate-50 text-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
          </div>

          <div className="hidden sm:flex flex-col">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total PO Value</label>
            <div className="h-10 flex items-center">
              <span className="text-xl font-bold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onSnooze}
            className="px-6 h-11 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            Snooze
          </button>
          <button 
            onClick={() => onApprove(quantity)}
            className="px-8 h-11 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-600 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
            Approve Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionFooter;
