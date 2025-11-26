import { Content } from 'pdfmake/interfaces';
import { dateFormatter } from 'src/helpers/dateFormater';

export type Header = {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
};

export const header = (props: Header): Content => {
  const { showLogo = true, showDate = true } = props;

  const logo: Content = showLogo
    ? {
        image: 'src/assets/tucan-code-logo.png',
        alignment: 'left',
        width: 80,
        height: 80,
      }
    : '';

  const date: Content = {
    text: showDate ? dateFormatter(new Date()) : '',
    alignment: 'right',
    style: 'date',
  };

  return {
    columns: [logo, date],
  };
};
