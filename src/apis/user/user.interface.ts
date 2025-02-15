import { BaseService } from '@/common/base/base.service';
import { UserEntity } from './entities/user.entity';

export abstract class IUserService extends BaseService<UserEntity> {
    abstract validateUserByUsernamePassword(username: string, password: string): Promise<UserEntity>;
    abstract validateUserById(id: number): Promise<UserEntity>;
    abstract getOneUserById(id: number): Promise<UserEntity>;
}
