import { AssetEntity } from '@/apis/asset/entities/asset.entity';
import { ICacheService } from '@/module/cache/cache.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAssetService } from './asset.interface';
import axios from 'axios';
import { ICompanyService } from '@/apis/company/company.interface';

@Injectable()
export class AssetService extends IAssetService {
	constructor(
		@InjectRepository(AssetEntity) private readonly assetRepo: Repository<AssetEntity>,
		private readonly cacheService: ICacheService,
		private readonly companyService: ICompanyService
	) {
		super(assetRepo);
	}

	async handleSyncAssets(): Promise<Boolean> {
		const url = 'https://669ce22d15704bb0e304842d.mockapi.io/assets';
		try {
			const response = await axios.get(url);
			const assets = response.data;
			if (assets && assets.length > 0) {
				for (const asset of assets) {
					const location = await this.companyService.checkLocationExist(
						asset.location_id,
						asset.status
					);
					if (location && new Date(asset.created_at) < new Date()) {
						const existingAsset = await this.assetRepo.findOne({
							where: { serial: asset.serial }
						});
						if (!existingAsset) {
							const newAsset = this.assetRepo.create({
								location_id: asset.location_id,
								type: asset.type,
								serial: asset.serial,
								status: asset.status,
								description: asset.description
							});
							await this.assetRepo.save(newAsset);
						} else {
							const { created_at, updated_at, deleted_at, ...assetToUpdate } = asset;
							await this.assetRepo.update(existingAsset.id, assetToUpdate);
						}
					}
				}
			}
		} catch (error) {
			console.error('Error fetching assets', error);
		}
		return true;
	}
}
