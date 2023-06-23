export const dateLocale = (date: Date | string, showYear?: boolean) => {
  const conv = new Date(date);
  return conv.toLocaleDateString('en', {
    month: 'short',
    day: '2-digit',
    year:
      showYear === undefined
        ? 'numeric'
        : showYear === false
        ? undefined
        : 'numeric',
  });
};

export const dateTimeLocale = (date: Date | string) => {
  const conv = new Date(date);
  return conv.toLocaleString('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const timeLocale = (time: string | undefined) =>
  time &&
  new Date(`1970-01-01T${time}`).toLocaleTimeString('en', {
    hour: 'numeric',
    minute: '2-digit',
  });

export const formatDate = (date: Date | string) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const dateFromTime = (date: Date | string, time: string) =>
  new Date(`${formatDate(date)}T${time}`);

export const getInitials = (name?: string | null) =>
  name &&
  name
    .split(' ')
    .map((halve) => halve.charAt(0).toUpperCase())
    .join('');

const start = new Date();
start.setHours(0, 0, 0, 0);
const end = new Date();
end.setHours(23, 59, 59, 999);

export const today = { start, end };
