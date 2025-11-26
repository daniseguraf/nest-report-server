import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GeneratePdfModule } from './generate-pdf/generate-pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BasicReportsModule,
    PrismaModule,
    GeneratePdfModule,
  ],
})
export class AppModule {}
