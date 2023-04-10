import { spotClient, wsCallbacks } from '../services/binanceClient'

export const btcProceTicker = () => {
  // all pairs
  // const wsRef = client.tickerWS(null, callbacks)

  // single pair
  const wsRef = spotClient.tickerWS('btcusdt', wsCallbacks)
  setTimeout(() => spotClient.unsubscribe(wsRef), 60000)
}
