export interface ExpenseData {
  id: number;
  date: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

const expenseData: ExpenseData[] = [
  {
    id: 1,
    date: "2024-07-01",
    category: "Groceries",
    amount: 45.23,
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    date: "2024-07-02",
    category: "Transportation",
    amount: 15.0,
    paymentMethod: "Cash",
  },
  {
    id: 3,
    date: "2024-07-03",
    category: "Dining",
    amount: 27.5,
    paymentMethod: "Debit Card",
  },
  {
    id: 4,
    date: "2024-07-04",
    category: "Utilities",
    amount: 89.99,
    paymentMethod: "Credit Card",
  },
  {
    id: 5,
    date: "2024-07-05",
    category: "Entertainment",
    amount: 60.0,
    paymentMethod: "Debit Card",
  },
  {
    id: 6,
    date: "2024-07-06",
    category: "Groceries",
    amount: 120.0,
    paymentMethod: "Cash",
  },
  {
    id: 7,
    date: "2024-07-07",
    category: "Dining",
    amount: 75.1,
    paymentMethod: "Credit Card",
  },
  {
    id: 8,
    date: "2024-07-08",
    category: "Rent",
    amount: 950.0,
    paymentMethod: "Debit Card",
  },
  {
    id: 9,
    date: "2024-07-09",
    category: "Transportation",
    amount: 20.0,
    paymentMethod: "Credit Card",
  },
  {
    id: 10,
    date: "2024-07-10",
    category: "Dining",
    amount: 33.75,
    paymentMethod: "Cash",
  },
  {
    id: 11,
    date: "2024-07-11",
    category: "Education",
    amount: 200.0,
    paymentMethod: "Debit Card",
  },
  {
    id: 12,
    date: "2024-07-12",
    category: "Clothing",
    amount: 150.0,
    paymentMethod: "Credit Card",
  },
  {
    id: 13,
    date: "2024-07-13",
    category: "Groceries",
    amount: 52.89,
    paymentMethod: "Cash",
  },
  {
    id: 14,
    date: "2024-07-14",
    category: "Entertainment",
    amount: 80.0,
    paymentMethod: "Debit Card",
  },
  {
    id: 15,
    date: "2024-07-15",
    category: "Transportation",
    amount: 18.0,
    paymentMethod: "Credit Card",
  },
  {
    id: 16,
    date: "2024-07-16",
    category: "Healthcare",
    amount: 135.0,
    paymentMethod: "Debit Card",
  },
  {
    id: 17,
    date: "2024-07-17",
    category: "Dining",
    amount: 45.5,
    paymentMethod: "Cash",
  },
  {
    id: 18,
    date: "2024-07-18",
    category: "Utilities",
    amount: 90.0,
    paymentMethod: "Credit Card",
  },
  {
    id: 19,
    date: "2024-07-19",
    category: "Groceries",
    amount: 63.25,
    paymentMethod: "Debit Card",
  },
  {
    id: 20,
    date: "2024-07-20",
    category: "Clothing",
    amount: 75.0,
    paymentMethod: "Cash",
  },
];

export default expenseData;
