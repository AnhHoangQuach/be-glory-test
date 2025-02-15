import { ApiProperty } from '@nestjs/swagger';

export class UsersDTO {
	@ApiProperty()
	username: string;
}
