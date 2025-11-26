import { Controller, Get, Res } from '@nestjs/common';
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

  @Get('employment-letter')
  getEmploymentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.getEmploymentLetter();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employent-letter';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
