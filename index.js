import { connectRPC } from "./rpc.client.js";
import { simulateYieldStrategy } from "./defi.simulator.js";
import { NETWORK, WALLET_ADDRESS } from "./network.config.js";

console.log("DeFi Yield Analytics Engine");
console.log("Network:", NETWORK);
console.log("Wallet:", WALLET_ADDRESS);

const provider = connectRPC();
simulateYieldStrategy(provider);
