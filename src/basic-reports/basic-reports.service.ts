import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
