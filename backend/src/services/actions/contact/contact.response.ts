import { ApiProperty } from '@nestjs/swagger';

export class ContactResponse {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  post: string;
}
