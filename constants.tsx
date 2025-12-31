
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'SKU-992',
    name: 'Generic HDMI Cable (6ft)',
    stock: 120,
    location: 'Warehouse B',
    riskMessage: 'Risk: Stockout in 3 days',
    confidence: 'High',
    timestamp: 'Now',
    unitPrice: 4.90,
    recommendation: {
      quantity: 500,
      supplier: 'TechSupplier Inc.',
      velocityChange: 15,
      depletionDays: 4,
      confidenceScore: 98
    },
    stats: {
      leadTime: '5 Days',
      safetyStock: '15 Days',
      pendingOrders: 0
    },
    salesHistory: [
      { day: '1', sales: 20 },
      { day: '5', sales: 35 },
      { day: '10', sales: 30 },
      { day: '15', sales: 45 },
      { day: '20', sales: 40 },
      { day: '25', sales: 55 },
      { day: '30', sales: 65 }
    ],
    supplier: {
      name: 'TechSupplier Inc.',
      initials: 'TS',
      lastFulfilled: '2 days ago',
      onTime: true
    }
  },
  {
    id: '2',
    sku: 'SKU-441',
    name: 'USB-C Hub Multiport',
    stock: 45,
    location: 'Warehouse A',
    riskMessage: 'Risk: Stockout in 5 days',
    confidence: 'Low',
    timestamp: '2h ago',
    unitPrice: 24.50,
    recommendation: {
      quantity: 200,
      supplier: 'ConnectCore Ltd',
      velocityChange: 8,
      depletionDays: 5,
      confidenceScore: 72
    },
    stats: {
      leadTime: '7 Days',
      safetyStock: '10 Days',
      pendingOrders: 1
    },
    salesHistory: [
      { day: '1', sales: 5 },
      { day: '5', sales: 12 },
      { day: '10', sales: 8 },
      { day: '15', sales: 15 },
      { day: '20', sales: 10 },
      { day: '25', sales: 18 },
      { day: '30', sales: 22 }
    ],
    supplier: {
      name: 'ConnectCore Ltd',
      initials: 'CC',
      lastFulfilled: '5 days ago',
      onTime: true
    }
  },
  {
    id: '3',
    sku: 'SKU-203',
    name: 'Monitor Stand 24-inch',
    stock: 15,
    location: 'Warehouse B',
    riskMessage: 'Promo Event Impact',
    confidence: 'Medium',
    timestamp: '4h ago',
    unitPrice: 45.00,
    recommendation: {
      quantity: 50,
      supplier: 'OfficeWorks',
      velocityChange: 25,
      depletionDays: 2,
      confidenceScore: 85
    },
    stats: {
      leadTime: '3 Days',
      safetyStock: '5 Days',
      pendingOrders: 0
    },
    salesHistory: [
      { day: '1', sales: 1 },
      { day: '5', sales: 2 },
      { day: '10', sales: 1 },
      { day: '15', sales: 5 },
      { day: '20', sales: 8 },
      { day: '25', sales: 12 },
      { day: '30', sales: 15 }
    ],
    supplier: {
      name: 'OfficeWorks',
      initials: 'OW',
      lastFulfilled: '1 day ago',
      onTime: false
    }
  },
  {
    id: '4',
    sku: 'SKU-112',
    name: 'Mechanical Keyboards',
    stock: 88,
    location: 'Warehouse C',
    riskMessage: 'Demand Spike Detected',
    confidence: 'High',
    timestamp: 'Yesterday',
    unitPrice: 85.00,
    recommendation: {
      quantity: 120,
      supplier: 'InputMasters',
      velocityChange: 12,
      depletionDays: 14,
      confidenceScore: 94
    },
    stats: {
      leadTime: '10 Days',
      safetyStock: '20 Days',
      pendingOrders: 0
    },
    salesHistory: [
      { day: '1', sales: 10 },
      { day: '5', sales: 12 },
      { day: '10', sales: 11 },
      { day: '15', sales: 14 },
      { day: '20', sales: 13 },
      { day: '25', sales: 16 },
      { day: '30', sales: 19 }
    ],
    supplier: {
      name: 'InputMasters',
      initials: 'IM',
      lastFulfilled: '1 week ago',
      onTime: true
    }
  }
];
