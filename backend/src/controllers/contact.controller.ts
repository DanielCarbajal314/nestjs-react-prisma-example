import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import {
  ContactCreateCommand,
  ContactListQuery,
  ContactResponse,
} from '../services';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BaseController } from './base.controller';

@Controller('contact')
export class ContactController extends BaseController {
  @Get()
  @ApiResponse({ type: ContactListQuery, isArray: true })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  async getContact(
    @Query() query: ContactListQuery,
  ): Promise<ContactResponse[]> {
    return await this.queryBus.execute<ContactListQuery, ContactResponse[]>(
      query,
    );
  }

  @Post()
  @ApiResponse({ type: ContactResponse })
  async postContact(
    @Body() body: ContactCreateCommand,
  ): Promise<ContactResponse> {
    return await this.commandBus.execute(body);
  }
}
