import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICommand } from '@nestjs/cqrs';
import { Transform } from 'class-transformer';

export class ArticleCreateCommand implements ICommand {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  imageUrl: string;
}
