import { Injectable } from '@nestjs/common';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs'

@Injectable()
export class DayjsService {
  private readonly dayjs: Dayjs;

  constructor() {
    this.dayjs = dayjs()
  }

  formatUnix(unix: number) {
    return dayjs(unix * 1000).format()
  }

  formatMs(ms: number) {
    return dayjs(ms).format()
  }
}
