import { NestFactory } from '@nestjs/core';

import { CompanySeedService } from '@/module/database/seeds/company/company-seed.service';
import { initializeTransactionalContext, StorageDriver } from 'typeorm-transactional';
import { SeedModule } from '@/module/database/seeds/seed.module';

const runSeed = async () => {
	initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });

	const app = await NestFactory.create(SeedModule);

	await app.get(CompanySeedService).run();

	await app.close();
};

void runSeed();
