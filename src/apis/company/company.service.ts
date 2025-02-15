import { ICompanyService } from '@/apis/company/company.interface';
import { CompanyEntity } from '@/apis/company/entities/company.entity';
import { ICacheService } from '@/module/cache/cache.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService extends ICompanyService {
	constructor(
		@InjectRepository(CompanyEntity) private readonly companyRepo: Repository<CompanyEntity>,
		private readonly cacheService: ICacheService
	) {
		super(companyRepo);
	}

	async checkLocationExist(location_id: number, status: string): Promise<CompanyEntity> {
		const company = await this.companyRepo.findOne({
			where: {
				location_id,
				status
			}
		});
		return company;
	}
}
