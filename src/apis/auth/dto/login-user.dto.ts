import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	username!: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	password!: string;
}
