export const dateFormatter = (date: Date): string => {
  const formatter = Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return formatter.format(date);
};
