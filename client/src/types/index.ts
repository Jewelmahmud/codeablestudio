export interface InvoiceItem {
  name: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Invoice {
  id: string;
  project: string;
  amount: number;
  status: 'Pending' | 'Paid' | 'Overdue';
  dueDate: string;
  isOverdue: boolean;
  description: string;
  items: InvoiceItem[];
}

export interface CardDetails {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
}

export interface FormErrors {
  number?: string;
  expiry?: string;
  cvc?: string;
  name?: string;
} 