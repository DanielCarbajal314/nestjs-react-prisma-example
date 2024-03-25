import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import {
  ArticleListQuery,
  ArticleResponse,
  ArticleGetQuery,
  ArticleCreateCommand,
} from '../services';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BaseController } from './base.controller';

@Controller('article')
export class ArticleController extends BaseController {
  @Get()
  @ApiResponse({ type: ArticleResponse, isArray: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  async getArticles(
    @Query() query: ArticleListQuery,
  ): Promise<ArticleResponse[]> {
    return await this.queryBus.execute<ArticleListQuery, ArticleResponse[]>(
      query,
    );
  }

  @Get(':id')
  @ApiResponse({ type: ArticleResponse })
  async getArticle(@Param('id') id: number): Promise<ArticleResponse> {
    return await this.queryBus.execute<ArticleGetQuery, ArticleResponse>(
      new ArticleGetQuery(id),
    );
  }

  @Post()
  @ApiResponse({ type: ArticleResponse })
  async postArticle(
    @Body() body: ArticleCreateCommand,
  ): Promise<ArticleResponse> {
    return await this.commandBus.execute(body);
  }
}
