import zipZones from "../data/zipZones";

export function getZipMultiplier(zipCode) {
  if (!zipCode || !/^\d{5}$/.test(zipCode)) {
    return 1.0;
  }

  const firstDigit = zipCode[0];
  return zipZones[firstDigit] ?? 1.0;
}