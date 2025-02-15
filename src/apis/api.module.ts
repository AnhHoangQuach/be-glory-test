import { Module } from '@nestjs/common';
import { AuthModule } from '@/apis/auth/auth.module';
import { UserModule } from '@/apis/user/user.module';
import { AssetModule } from '@/apis/asset/asset.module';
import { CompanyModule } from '@/apis/company/company.module';

@Module({
	imports: [UserModule, AuthModule, CompanyModule, AssetModule]
})
export class ApiModule {}
