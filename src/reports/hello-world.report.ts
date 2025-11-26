import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getHelloWorldReport = () => {
  const docDefinition: TDocumentDefinitions = {
    content: ['Hola Mundo 1'],
  };

  return docDefinition;
};
