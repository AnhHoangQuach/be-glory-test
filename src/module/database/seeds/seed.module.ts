import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database.module';
import { CompanySeedModule } from '@/module/database/seeds/company/company-seed.module';

@Module({
	imports: [
		CompanySeedModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env']
		}),
		DatabaseModule
	]
})
export class SeedModule {}
