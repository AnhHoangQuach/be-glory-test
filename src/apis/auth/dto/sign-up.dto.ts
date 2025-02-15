import { IsNotEmpty, IsString } from '@/common/decorator/validation.decorator';
import { lowerCaseTransformer } from '@/common/utils/transformer/upper-lower-case.transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class SignUpDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Transform(lowerCaseTransformer)
	username: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	password: string;
}
