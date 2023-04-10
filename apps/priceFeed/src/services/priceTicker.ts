import { bybitWS } from '../lib/bybitClient'

export const priceTicker = ({ ticker }: { ticker: string }) => {
  // tickers.ETHUSD
  const topic = `tickers.${ticker}`

  bybitWS.subscribeV5(topic, 'linear')

  bybitWS.on('update', (data) => {
    if (data.topic === topic && data.type === 'delta') {
      console.log('update', data)
    }
  })
}
