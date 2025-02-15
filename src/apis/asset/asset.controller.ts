import { IAssetService } from '@/apis/asset/asset.interface';
import { ApiController } from '@/common/base/base.swagger';
import { Controller } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Controller('asset')
@ApiController('Asset')
export class AssetController {
	constructor(private readonly assetService: IAssetService) {}

	@Cron('0 0 * * *', { timeZone: 'Asia/Ho_Chi_Minh' })
	async syncAssets() {
		console.log('sync assets')
		return this.assetService.handleSyncAssets();
	}
}
