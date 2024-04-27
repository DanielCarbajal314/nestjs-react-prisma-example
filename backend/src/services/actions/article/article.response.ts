import { ApiProperty } from '@nestjs/swagger';

export class ArticleResponse {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  author: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  imageUrl: string;
}
