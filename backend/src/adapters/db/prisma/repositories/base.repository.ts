import { Page } from '../../interfaces/base.repository.interface';
import { PrismaService } from '../prisma.service';

export class BaseRepository {
  constructor(protected prisma: PrismaService) {}

  protected processDefaultPage({ page, pageSize }: Page) {
    const skipItems = page * pageSize;
    return {
      skip: !isNaN(skipItems) ? skipItems ?? 0 : 0,
      take: pageSize,
    };
  }
}
