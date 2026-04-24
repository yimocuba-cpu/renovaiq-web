// lib/calculateTotal.js

import hiddenCosts from "../data/hiddenCosts";
import { formatRange, formatSingle } from "./formatCurrency";

export function calculateTotal(laborLow, laborHigh, materialsTotal) {
  const totalLow = laborLow + materialsTotal;
  const totalHigh = laborHigh + materialsTotal;

  return {
    labor: formatRange(laborLow, laborHigh),
    materials: formatSingle(materialsTotal),
    estimatedProjectCost: formatRange(totalLow, totalHigh),
    hiddenCosts,
  };
}