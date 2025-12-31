
export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export interface SalesDataPoint {
  day: string;
  sales: number;
}

export interface Supplier {
  name: string;
  initials: string;
  lastFulfilled: string;
  onTime: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  stock: number;
  location: string;
  riskMessage: string;
  confidence: ConfidenceLevel;
  timestamp: string;
  recommendation: {
    quantity: number;
    supplier: string;
    velocityChange: number;
    depletionDays: number;
    confidenceScore: number;
  };
  stats: {
    leadTime: string;
    safetyStock: string;
    pendingOrders: number;
  };
  salesHistory: SalesDataPoint[];
  supplier: Supplier;
  unitPrice: number;
}
