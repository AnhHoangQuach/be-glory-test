import { CompanyEntity } from '@/apis/company/entities/company.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompanySeedService {
	constructor(
		@InjectRepository(CompanyEntity)
		private repository: Repository<CompanyEntity>
	) {}

	async run() {
		await this.repository.save([
			this.repository.create({
				id: 1,
				location_id: 1,
				location_name: 'Da Nang',
				organization: 'PNS',
				status: 'actived'
			}),
			this.repository.create({
				id: 2,
				location_id: 2,
				location_name: 'Ha Noi',
				organization: 'PNS',
				status: 'unactive'
			}),
			this.repository.create({
				id: 3,
				location_id: 3,
				location_name: 'Ho Chi Minh',
				organization: 'PNS',
				status: 'actived'
			}),
			this.repository.create({
				id: 4,
				location_id: 4,
				location_name: 'Nha Trang',
				organization: 'PLJ',
				status: 'actived'
			}),
			this.repository.create({
				id: 5,
				location_id: 5,
				location_name: 'Can Tho',
				organization: 'PLJ',
				status: 'actived'
			})
		]);
	}
}
