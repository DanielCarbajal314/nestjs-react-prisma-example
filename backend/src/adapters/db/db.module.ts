import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { IUnitOfWork } from './interfaces';
import { UnitOfWork } from './prisma/unit.of.work';

@Module({
  exports: [
    PrismaService,
    {
      provide: IUnitOfWork,
      useClass: UnitOfWork,
    },
  ],
  providers: [
    PrismaService,
    {
      provide: IUnitOfWork,
      useClass: UnitOfWork,
    },
    Logger,
  ],
})
export class DbModule {}
