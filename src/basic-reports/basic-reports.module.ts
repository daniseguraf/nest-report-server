import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GeneratePdfModule } from 'src/generate-pdf/generate-pdf.module';

@Module({
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
  imports: [PrismaModule, GeneratePdfModule],
})
export class BasicReportsModule {}
