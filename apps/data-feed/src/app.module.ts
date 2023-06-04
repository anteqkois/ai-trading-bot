import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config';
import { CandlesHistoricModule } from './core/candles-historic/candles-historic.module';
import { DayjsModule } from './shared/dayjs/dayjs.module';

@Module({
  imports: [ConfigModule.forRoot(), CandlesHistoricModule, DayjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
