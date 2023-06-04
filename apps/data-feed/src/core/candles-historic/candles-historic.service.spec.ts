import { Test, TestingModule } from '@nestjs/testing';
import { CandlesHistoricService } from './candles-historic.service';

describe('CandlesHistoricService', () => {
  let service: CandlesHistoricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandlesHistoricService],
    }).compile();

    service = module.get<CandlesHistoricService>(CandlesHistoricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
