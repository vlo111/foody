// Common API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

// Location types
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: Coordinates;
}

// Notification types
export type NotificationType = 
  | 'order_created'
  | 'order_accepted'
  | 'order_picked_up'
  | 'order_delivered'
  | 'order_cancelled'
  | 'driver_nearby'
  | 'promotion';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: any;
  read: boolean;
  createdAt: string;
}

// Rating types
export interface Rating {
  id: string;
  orderId: string;
  userId: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: string;
}

// Payment types
export type PaymentMethod = 'cash' | 'card' | 'wallet';

export interface Payment {
  id: string;
  orderId: string;
  method: PaymentMethod;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  createdAt: string;
}

// File upload types
export interface UploadedFile {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  size: number;
  createdAt: string;
}
