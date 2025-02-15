import { RefreshTokenDto, TokenDto } from '@/apis/auth/dto/refresh-token.dto';
import { SignUpDto } from '@/apis/auth/dto/sign-up.dto';
import { UsersDTO } from '@/apis/user/dto/users.dto';
import { CreateTokenResponse } from '@/common/types/auth.dto';

export abstract class IAuthService {
    abstract createToken(user: User): Promise<CreateTokenResponse>;

    abstract refreshToken(refreshTokenDto: RefreshTokenDto): Promise<TokenDto>;

    abstract logout(refreshTokenDto: RefreshTokenDto): any;

    abstract signUp(createUserDto: SignUpDto): Promise<UsersDTO>;
}