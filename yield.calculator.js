export function calculateAPY(apr, compoundsPerYear = 365) {
  const rate = apr / 100;
  return ((1 + rate / compoundsPerYear) ** compoundsPerYear - 1) * 100;
}
