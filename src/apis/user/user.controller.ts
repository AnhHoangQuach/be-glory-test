import { ApiController, ApiGetOne } from '@/common/base/base.swagger';
import { User } from '@/common/decorator/user.decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthStrategy } from '../auth/auth.const';
import { UserEntity } from './entities/user.entity';
import { IUserService } from './user.interface';

@Controller('user')
@ApiController('User')
export class UserController {
	constructor(private readonly userService: IUserService) {}

	@Get('user-information')
	@ApiBearerAuth()
	@ApiGetOne(UserEntity, 'User')
	@UseGuards(AuthGuard(AuthStrategy.USER_JWT))
	getUserInfomation(@User() user: User) {
		return user
	}
}
