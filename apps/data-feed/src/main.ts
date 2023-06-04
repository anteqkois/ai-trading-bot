import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { CandlesHistoricService } from './core/candles-historic/candles-historic.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(3000);
  app.get(CandlesHistoricService).fetch('ETH/USDT', '1m', '2023-01-01T00:00:00Z')
}
bootstrap();