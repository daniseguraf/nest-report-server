import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { header } from './components/header';

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

export const getEmploymentLetterdReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles,
    header: header({ showLogo: false, showDate: false }),
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'title',
      },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra empresa desde el [Fecha de Inicio del Empleado].`,
        style: 'p',
      },
      {
        text: `Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.`,
        style: 'p',
      },
      {
        text: `La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y procedimientos establecidos por la empresa.`,
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
        text: `[Nombre del Empleador]`,
        style: 'userInfo',
      },
      {
        text: `[Cargo del Empleador]`,
        style: 'userInfo',
      },
      {
        text: `[Nombre de la Empresa]`,
        style: 'userInfo',
      },
      {
        text: `[Fecha de Emisión]`,
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
