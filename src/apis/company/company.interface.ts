import { CompanyEntity } from '@/apis/company/entities/company.entity';
import { BaseService } from '@/common/base/base.service';

export abstract class ICompanyService extends BaseService<CompanyEntity> {
    abstract checkLocationExist(location_id: number, status: string): Promise<CompanyEntity>;
}
