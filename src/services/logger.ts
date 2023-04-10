import { createLogger, format, transports } from 'winston'

export const tickerLogger = createLogger({
  level: 'debug', // change the level to show different log message, e.g. info, warn, etc
  format: format.combine(format.splat(), format.simple()),
  transports: [new transports.Console()],
})
