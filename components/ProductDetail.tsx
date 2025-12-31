
import React from 'react';
import { Product } from '../types';
import SalesChart from './SalesChart';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 flex flex-col gap-6 pb-32">
      {/* Product Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
              <span className="text-sm text-slate-400 font-mono bg-slate-100 px-2 py-0.5 rounded">{product.sku}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                In Stock: <span className="font-semibold text-slate-900">{product.stock} units</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="material-symbols-outlined text-[16px] text-slate-400">warehouse</span>
                Location: <span className="font-medium text-slate-900">{product.location}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Recommendation Box */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-9xl text-primary">auto_awesome</span>
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide">
            <span className="material-symbols-outlined text-[18px]">smart_toy</span>
            AI Recommendation
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Order <span className="text-primary underline decoration-primary/30 decoration-2 underline-offset-4">{product.recommendation.quantity} Units</span> from {product.recommendation.supplier}
            </h3>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              Demand velocity increased by <span className="font-semibold text-slate-900">{product.recommendation.velocityChange}% week-over-week</span>. Based on current burn rate, stock will deplete in <span className="font-semibold text-red-600">{product.recommendation.depletionDays} days</span>.
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-blue-800 border border-blue-100 shadow-sm">
              Confidence Score: {product.recommendation.confidenceScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Charts & Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-slate-900">Sales Velocity (30 Days)</h4>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +12.5%
            </span>
          </div>
          <SalesChart data={product.salesHistory} />
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1 shadow-sm flex flex-col justify-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Lead Time</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{product.stats.leadTime}</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1 shadow-sm flex flex-col justify-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Safety Stock</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{product.stats.safetyStock}</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1 shadow-sm flex flex-col justify-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Pending Orders</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{product.stats.pendingOrders}</span>
              <span className="text-xs text-slate-400">Units</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Info */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
          <h4 className="text-sm font-semibold text-slate-900">Supplier Profile</h4>
          <button className="text-xs text-primary font-medium hover:underline">View History</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg">
            {product.supplier.initials}
          </div>
          <div className="flex-1">
            <h5 className="text-sm font-bold text-slate-900">{product.supplier.name}</h5>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-xs text-slate-500">Last fulfilled: {product.supplier.lastFulfilled}</p>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <div className="flex items-center gap-1">
                <span className={`material-symbols-outlined text-[14px] ${product.supplier.onTime ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {product.supplier.onTime ? 'verified' : 'pending'}
                </span>
                <span className="text-xs font-medium text-slate-700">{product.supplier.onTime ? '98% On-time' : 'Late recently'}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 font-medium uppercase">Unit Price</p>
            <p className="text-lg font-bold text-slate-900">${product.unitPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
