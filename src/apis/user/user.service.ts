import { ICacheService } from '@/module/cache/cache.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { verify } from 'argon2';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { IUserService } from './user.interface';

@Injectable()
export class UserService extends IUserService {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>,
		private readonly cacheService: ICacheService
	) {
		super(userRepo);
	}

	async validateUserByUsernamePassword(username: string, password: string): Promise<UserEntity> {
		const user = await this.getOne({ where: { username } });
		if (!user) {
			throw new UnauthorizedException('User not found');
		}
		const comparePassword = await verify(user.password, password);
		if (!comparePassword) {
			throw new UnauthorizedException('Incorrect username or password');
		}
		return user;
	}

	async validateUserById(id: number): Promise<UserEntity> {
		return this.getOneByIdOrFail(id);
	}

	async getOneUserById(id: number) {
		return this.getOneByIdOrFail(id);
	}
}
