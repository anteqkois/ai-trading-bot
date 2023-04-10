import 'dotenv/config'
import { getKline } from './services/kline'

const main = async () => {
  // btcProceTicker()
  // priceTicker({ ticker: 'ETHUSDT' })
  getKline({ interval: '1', symbol: 'BTCUSDT' })
}

main().catch((err) => {
  console.log(err)
})
