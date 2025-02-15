import { BaseEntity } from '@/common/base/base.entity';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'asset' })
export class AssetEntity extends BaseEntity {
	@Column()
	@IsNumber()
	location_id: number;

	@Column()
	@IsString()
	type: string;

	@Column()
	@IsString()
	serial: string;

	@Column()
	@IsString()
	status: string;

	@Column()
	@IsString()
	description: string;
}
