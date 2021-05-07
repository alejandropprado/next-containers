export const toDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ca-ES').format(date)
};

export const toHour = (date: Date): string => {
  const format = new Intl.DateTimeFormat('ca-ES', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);

  return format;
};

export const toDateTime = (date: Date): string => {
  return `${toDate(date)} ${toHour(date)}`
};
