import { calculateAPY } from "./yield.calculator.js";
import { simulateLiquidityPool } from "./pool.simulator.js";

export function simulateYieldStrategy() {
  console.log("Simulating DeFi yield strategy...");

  const apr = 12;
  const apy = calculateAPY(apr);
  const pool = simulateLiquidityPool(10000, apr / 100);

  console.log("APR:", apr + "%");
  console.log("APY:", apy.toFixed(2) + "%");
  console.log("Daily Rewards Estimate:", pool.estimatedDailyRewards.toFixed(2));
}
