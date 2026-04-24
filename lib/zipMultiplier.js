// lib/zipMultiplier.js

import zipZones from "../data/zipZones";

export function getZipMultiplier(zipCode) {
  if (!zipCode || !/^\d{5}$/.test(zipCode)) {
    return null;
  }

  const firstDigit = zipCode.charAt(0);
  return zipZones[firstDigit] ?? 1.0;
}