import { Content } from 'pdfmake/interfaces';

export const footer = (currentPage: number, pageCount: number): Content => {
  return {
    text: `Página ${currentPage} de ${pageCount}`,
    fontSize: 12,
    alignment: 'right',
    bold: true,
    marginTop: 16,
    marginRight: 16,
  };
};
