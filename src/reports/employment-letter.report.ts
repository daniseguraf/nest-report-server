import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { header } from './components/header';
import { dateFormatter } from 'src/helpers/dateFormater';

export type Employee = {
  employeeName: string;
  employeePosition: string;
  employerName: string;
  employerPosition: string;
  employeeStartDate: string;
  employeeWorkingHours: number;
  employeeWorkSchedule: string;
  employerCompany: string;
};

const styles: StyleDictionary = {
  title: {
    bold: true,
    fontSize: 22,
    alignment: 'center',
    marginTop: 64,
    marginBottom: 24,
  },
  p: {
    marginBottom: 8,
  },
  pLast: {
    marginBottom: 64,
  },
  userInfo: {
    bold: true,
    fontSize: 14,
    alignment: 'left',
  },
  footer: {
    fontSize: 10,
    italics: true,
    alignment: 'center',
  },
  date: {
    marginTop: 16,
    marginRight: 16,
  },
};

export const getEmploymentLetterdReport = (
  employee: Employee,
): TDocumentDefinitions => {
  const {
    employeeName,
    employeePosition,
    employerName,
    employerPosition,
    employeeStartDate,
    employeeWorkingHours,
    employeeWorkSchedule,
    employerCompany,
  } = employee;

  const docDefinition: TDocumentDefinitions = {
    styles,
    header: header({}),
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'title',
      },
      {
        text: `Yo, ${employerName}, en mi calidad de ${employerPosition} de ${employerCompany}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${employeeStartDate}.`,
        style: 'p',
      },
      {
        text: `Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.`,
        style: 'p',
      },
      {
        text: `La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeWorkingHours} horas semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa.`,
        style: 'p',
      },
      {
        text: `Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.`,
        style: 'pLast',
      },
      {
        text: `Atentamente,`,
        style: 'userInfo',
      },
      {
        text: employerName,
        style: 'userInfo',
      },
      {
        text: employerPosition,
        style: 'userInfo',
      },
      {
        text: employerCompany,
        style: 'userInfo',
      },
      {
        text: dateFormatter(new Date()),
        style: 'userInfo',
      },
    ],
    footer: [
      {
        text: `Este documento es una constancia de empleo y no representa un compromiso laboral.`,
        style: 'footer',
      },
    ],
  };

  return docDefinition;
};
