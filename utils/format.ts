export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatQuantity = (quantity: number, noun: string): string => {
  return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
};
