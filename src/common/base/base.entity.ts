import { ApiProperty } from '@nestjs/swagger';
import {
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity as TypeormBaseEntity
} from 'typeorm';

export class BaseEntity extends TypeormBaseEntity {
	@ApiProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty()
	@CreateDateColumn({ default: new Date() })
	created_at: Date;

	@ApiProperty()
	@CreateDateColumn({ default: new Date() })
	updated_at: Date;

	@ApiProperty()
	@DeleteDateColumn()
	deleted_at?: Date | null;
}
