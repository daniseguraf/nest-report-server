import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { header } from './components/header';
import { countries as Country } from 'generated/prisma/client';
import { footer } from './components/footer';

export type CountryList = {
  title?: string;
  subTitle?: string;
  countries: Country[];
};

export const getCountryList = (data: CountryList): TDocumentDefinitions => {
  const { title = '', subTitle = '', countries } = data;

  const docDefinition: TDocumentDefinitions = {
    pageOrientation: 'landscape',
    pageMargins: [40, 100, 40, 60],
    header: header({
      title,
      subTitle,
    }),
    footer,
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, 'auto', '*', '*'],

          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],
            ...countries.map((country) => [
              `${country.id}`,
              country.iso2,
              country.iso3 ?? '',
              { text: country.name ?? '', bold: true },
              country.continent ?? '',
              country.local_name ?? '',
            ]),
          ],
        },
      },
    ],
  };

  return docDefinition;
};
