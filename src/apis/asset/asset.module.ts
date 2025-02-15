import { AssetController } from '@/apis/asset/asset.controller';
import { IAssetService } from '@/apis/asset/asset.interface';
import { AssetService } from '@/apis/asset/asset.service';
import { AssetEntity } from '@/apis/asset/entities/asset.entity';
import { CompanyModule } from '@/apis/company/company.module';
import { CacheModule } from '@/module/cache/cache.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([AssetEntity]), CacheModule, CompanyModule],
	controllers: [AssetController],
	providers: [
		{
			provide: IAssetService,
			useClass: AssetService
		}
	],
	exports: [IAssetService]
})
export class AssetModule {}
