import { Spot } from '@binance/connector'
import { tickerLogger } from './logger'

export const spotClient = new Spot(process.env.BINANCE_API_KEY, process.env.BINANCE_API_SECRET, { tickerLogger })

export const wsCallbacks = {
  open: () => tickerLogger.debug('Connected with Websocket server'),
  close: () => tickerLogger.debug('Disconnected with Websocket server'),
  message: (data: unknown) => tickerLogger.info(data),
}