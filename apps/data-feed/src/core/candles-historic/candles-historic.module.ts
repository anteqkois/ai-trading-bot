import { Module } from '@nestjs/common';
import { CandlesHistoricService } from './candles-historic.service';
import { ConfigService } from '@nestjs/config';
import ccxt from 'ccxt';
import { DayjsService } from '../../shared/dayjs/dayjs.service';

@Module({
  // providers: [CandlesHistoricService, ConfigService, { provide: 'CCTX', useValue: ccxt }]
  providers: [CandlesHistoricService, ConfigService, DayjsService]
})
export class CandlesHistoricModule { }
