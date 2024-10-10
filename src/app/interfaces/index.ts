export type User = {
  id: number;
  name: string;
  balance: number;
};

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
}

export interface Statement {
  transactions: Transaction[];
  startDate?: string;
  endDate?: string;
}
