export function estimateStakingRewards(amount, apr) {
  const dailyRate = apr / 365 / 100;
  return amount * dailyRate;
}
