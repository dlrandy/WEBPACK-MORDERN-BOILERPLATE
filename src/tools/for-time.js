import * as moment from 'moment';

export function formatDateStr(
  timestamp,
  format = 'MMM DD, YYYY',
  locale = 'en'
) {
  moment.locale(locale);
  return moment.default(timestamp).format(format);
}

export function getTimeRemaining(endtime) {
  let t = endtime - Date.now(),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.ceil((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
