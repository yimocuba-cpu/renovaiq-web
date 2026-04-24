// lib/formatCurrency.js

export function formatCurrency(amount) {
  return "$" + amount.toLocaleString("en-US");
}

export function formatRange(low, high) {
  return `${formatCurrency(low)} – ${formatCurrency(high)} USD`;
}

export function formatSingle(amount) {
  return `${formatCurrency(amount)} USD`;
}