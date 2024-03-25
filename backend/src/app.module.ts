import { Module } from '@nestjs/common';
import { AppControllers } from './controllers';
import { WinstonModule, utilities } from 'nest-winston';
import { transports, format } from 'winston';
import { ServiceModule } from './services/services.module';

const messageFormat = utilities.format.nestLike('App', {
  colors: true,
  prettyPrint: true,
});

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'debug',
      transports: new transports.Console({
        format: format.combine(format.timestamp(), format.ms(), messageFormat),
      }),
    }),
    ServiceModule,
  ],
  controllers: AppControllers,
})
export class AppModule {}
