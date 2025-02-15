import { BaseEntity } from '@/common/base/base.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import { hash } from 'argon2';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	/** Login account */
	@Column()
	username: string;

	/** Password */
	@ApiHideProperty()
	@Column()
	@Exclude()
	password: string;

	/**
	 * Hash the password before saving the user to the database
	 */
	@BeforeInsert()
	async beforeInsert() {
		this.password = await hash(this.password);
	}
}
