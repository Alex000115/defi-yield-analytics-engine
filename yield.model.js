export function createYieldModel(protocol, apr, apy) {
  return {
    protocol,
    apr,
    apy,
    timestamp: Date.now()
  };
}
