import { CompanyEntity } from '@/apis/company/entities/company.entity';
import { CompanySeedService } from '@/module/database/seeds/company/company-seed.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([CompanyEntity])],
	providers: [CompanySeedService],
	exports: [CompanySeedService]
})
export class CompanySeedModule {}
