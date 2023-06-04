import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { bybit, pro } from 'ccxt';
import { DayjsService } from '../../shared/dayjs/dayjs.service';
import { sleep } from '../../shared/utils';

@Injectable()
export class CandlesHistoricService {
  private readonly logger = new Logger(CandlesHistoricService.name);
  private readonly latencyMs: number;
  private readonly exchangeClient: bybit = null;
  private readonly chunkSize: number;

  constructor(private readonly config: ConfigService, private readonly dayjs: DayjsService) {
    this.chunkSize = 1
    this.latencyMs = 200
    this.exchangeClient = new pro.bybit()
  }

  async fetch(symbol: string, timeframe: string, from: string) {
    this.logger.verbose(`Fetching OHLCV candles from: ${ from }`);
    let fromMs = this.exchangeClient.parse8601(from)

    if (this.exchangeClient.has['fetchOHLCV']) {
      while (fromMs < this.exchangeClient.milliseconds()) {
        try {
          const candles = await this.exchangeClient.fetchOHLCV(symbol, timeframe, fromMs, this.chunkSize, { 'price': 'mark' })
          this.logger.log(`${symbol} [${timeframe}], ${ this.dayjs.formatMs(candles[0][0]) }, $USD${ candles[0][1] }, Rest Data: ${ candles }`)
          fromMs += 1000 * 60 * this.chunkSize
          await sleep(this.latencyMs)
        } catch (e) {
          this.logger.error(e)
        }
      }
    }
  }


  // async watchCandles() {
  //   const 
  //   // if (this.exchangeClient.has['watchOHLCV']) {
  //   //   while (true) {
  //       try {
  //         // const candles = await this.bitbetClient.watchOHLCV(symbol, timeframe, since, limit, params)
  //         const candles = await this.exchangeClient.watchOHLCV('ETH/USDT', '1m', this.exchangeClient.milliseconds(), undefined, { 'price': 'mark' })
  //         console.log('OHLCV:', new Date(), candles)
  //       } catch (e) {
  //         console.log(e)
  //         // stop the loop on exception or leave it commented to retry
  //         // throw e
  //       }
  //   //   }
  //   // }
  // }
}
