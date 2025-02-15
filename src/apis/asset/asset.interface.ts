import { AssetEntity } from '@/apis/asset/entities/asset.entity';
import { BaseService } from '@/common/base/base.service';

export abstract class IAssetService extends BaseService<AssetEntity> {
    abstract handleSyncAssets(): Promise<Boolean>;
}
