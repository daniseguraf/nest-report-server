import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  getPdf(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.getPdf();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter/:employeeId')
  async getEmploymentLetter(
    @Param('employeeId') employeeId: string,
    @Res() response: Response,
  ) {
    const pdfDoc = await this.basicReportsService.getEmploymentLetter(
      Number(employeeId),
    );

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employent-letter';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('countries')
  async getCountries(@Res() response: Response) {
    const pdfDoc = await this.basicReportsService.findAllCountries();
    // console.log('pdfDoc', pdfDoc);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Countries-report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
