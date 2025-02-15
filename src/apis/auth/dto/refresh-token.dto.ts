import { IsNotEmpty, IsString } from '@/common/decorator/validation.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	refreshToken: string;
}

export class TokenDto extends RefreshTokenDto {
	accessToken: string;
}
