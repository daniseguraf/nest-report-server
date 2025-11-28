import { Content } from 'pdfmake/interfaces';
import { dateFormatter } from 'src/helpers/dateFormater';

export type Header = {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
};

export const header = (props: Header): Content => {
  const { showLogo = true, showDate = true, title, subTitle } = props;

  const logo: Content = showLogo
    ? {
        image: 'src/assets/tucan-code-logo.png',
        width: 80,
        height: 80,
      }
    : '';

  const date: Content = showDate
    ? {
        text: dateFormatter(new Date()),
        alignment: 'right',
      }
    : '';

  const headerTitle = title
    ? {
        text: title,
        style: {
          bold: true,
          fontSize: 24,
        },
      }
    : '';

  const headerSubtitle = subTitle
    ? {
        text: subTitle,
        style: {
          bold: true,
          fontSize: 16,
        },
      }
    : '';

  const headerStack = {
    stack: [headerTitle, headerSubtitle],
    width: '*',
  };

  return {
    columns: [logo, headerStack, date],
  };
};
