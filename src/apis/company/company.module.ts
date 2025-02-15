import { ICompanyService } from '@/apis/company/company.interface';
import { CompanyService } from '@/apis/company/company.service';
import { CompanyEntity } from '@/apis/company/entities/company.entity';
import { CacheModule } from '@/module/cache/cache.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([CompanyEntity]), CacheModule],
	controllers: [],
	providers: [
		{
			provide: ICompanyService,
			useClass: CompanyService
		}
	],
	exports: [ICompanyService]
})
export class CompanyModule {}
