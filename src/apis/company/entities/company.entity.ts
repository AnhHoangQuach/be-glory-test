import { BaseEntity } from '@/common/base/base.entity';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'company' })
export class CompanyEntity extends BaseEntity {
	@Column()
	@IsNumber()
	location_id: number;

	@Column()
	@IsString()
	location_name: string;

	@Column()
	@IsString()
	organization: string;

	@Column()
	@IsString()
	status: string;
}
