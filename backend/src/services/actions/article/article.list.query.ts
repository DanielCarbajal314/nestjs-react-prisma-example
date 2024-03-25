import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IQuery } from '@nestjs/cqrs';
import { Transform } from 'class-transformer';

export class ArticleListQuery implements IQuery {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @ApiProperty({ nullable: true })
  pageSize?: number;
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @ApiProperty({ nullable: true })
  page?: number;
}
