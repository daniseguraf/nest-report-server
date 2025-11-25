import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import { PrismaService } from 'src/prisma/prisma.service';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: '/fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class BasicReportsService {
  constructor(private prismaService: PrismaService) {}

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
    const printer = new PdfPrinter(fonts);
    const docDefinition = {
      content: ['Hola Mundo'],
    };

    return printer.createPdfKitDocument(docDefinition);
  }
}
