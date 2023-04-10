declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BINANCE_API_KEY: string
      BINANCE_API_SECRET: string
      BYBIT_API_KEY: string
      BYBIT_API_SECRET: string
    }
  }
}

export {}
