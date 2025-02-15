import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { FindOptionsOrder, FindOptionsWhere } from 'typeorm';
import { IsNumber } from '../decorator/validation.decorator';
import { BaseEntity } from './base.entity';

export class PaginationDto<T = BaseEntity> {
	@IsOptional()
	@IsNumber()
	@Transform(({ value }) => +(value || 10))
	@ApiProperty()
	limit?: number;

	@IsOptional()
	@IsNumber()
	@Transform(({ value }) => +(value || 10))
	@ApiProperty()
	page?: number;

	@IsOptional()
	@Transform(({ value }) => JSON.parse(value))
	@ApiProperty()
	order?: FindOptionsOrder<T>;

	@IsOptional()
	@Transform(({ value }) => JSON.parse(value))
	@ApiProperty()
	filter?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
}
