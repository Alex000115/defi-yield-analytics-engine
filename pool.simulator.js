export function simulateLiquidityPool(liquidity, rewardRate) {
  return {
    totalLiquidity: liquidity,
    rewardRate,
    estimatedDailyRewards: liquidity * (rewardRate / 365)
  };
}
