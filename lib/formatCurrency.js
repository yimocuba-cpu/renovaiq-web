// lib/formatCurrency.js

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatCurrency(amount) {
  return formatter.format(amount);
}

export function formatRange(low, high) {
  return `${formatter.format(low)} – ${formatter.format(high)}`;
}

export function formatSingle(amount) {
  return formatter.format(amount);
}