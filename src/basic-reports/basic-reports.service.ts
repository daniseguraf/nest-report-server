import { Injectable } from '@nestjs/common';
import { GeneratePdfService } from 'src/generate-pdf/generate-pdf.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { getEmploymentLetterdReport } from 'src/reports/employment-letter.report';
import { getHelloWorldReport } from 'src/reports/hello-world.report';

@Injectable()
export class BasicReportsService {
  constructor(
    private prismaService: PrismaService,
    private readonly generatePdfService: GeneratePdfService,
  ) {}

  async getEmployeeById() {
    try {
      const employee = await this.prismaService.employees.findUnique({
        where: { id: 3 },
      });
      return employee;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw new Error('Failed to fetch employee');
    }
  }

  getPdf() {
    const content = getHelloWorldReport();
    const pdfDoc = this.generatePdfService.getPdf(content);

    return pdfDoc;
  }

  getEmploymentLetter() {
    const docDefinition = getEmploymentLetterdReport();

    return this.generatePdfService.getPdf(docDefinition);
  }
}
