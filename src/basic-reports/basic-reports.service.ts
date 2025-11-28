import { Injectable, NotFoundException } from '@nestjs/common';
import { GeneratePdfService } from 'src/generate-pdf/generate-pdf.service';
import { dateFormatter } from 'src/helpers/dateFormater';
import { PrismaService } from 'src/prisma/prisma.service';
import { getCountryList } from 'src/reports/countries.report';
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

  async getEmploymentLetter(employeeId: number) {
    const employee = await this.prismaService.employees.findFirst({
      where: { id: Number(employeeId) },
    });

    if (!employee) {
      throw new NotFoundException(`Not found employee with id ${employeeId}`);
    }

    const docDefinition = getEmploymentLetterdReport({
      employeeName: employee.name,
      employeePosition: employee.position,
      employerName: 'Daniel Segura',
      employerPosition: 'Gerente',
      employeeStartDate: dateFormatter(employee.start_date),
      employeeWorkingHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Acme Inc.',
    });

    return this.generatePdfService.getPdf(docDefinition);
  }

  async findAllCountries() {
    const countries = await this.prismaService.countries.findMany({
      where: { local_name: { not: null } },
    });

    if (!countries) {
      throw new NotFoundException(`Not found countries`);
    }

    const data = {
      title: 'Countries Report 1',
      subTitle: 'List of countries 2',
      countries,
    };

    const docDefinition = getCountryList(data);

    return this.generatePdfService.getPdf(docDefinition);
  }
}
