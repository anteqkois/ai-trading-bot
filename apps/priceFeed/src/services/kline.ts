import { GetMarkPriceKlineParamsV5 } from 'bybit-api'
import { bybitWS } from '../lib/bybitClient'

export const getKline = ({ symbol, interval }: Pick<GetMarkPriceKlineParamsV5, 'interval' | 'symbol'>) => {
  // tickers.ETHUSD
  const topic = `kline.${interval}.${symbol}`

  bybitWS.subscribeV5(topic, 'linear')

  bybitWS.on('update', (data) => {
    // if (data.topic === topic && data.type === 'delta') {
    // console.log('update', data)
    console.log(data.data[0])
    // }
  })
}
