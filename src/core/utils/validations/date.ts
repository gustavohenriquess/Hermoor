import moment from 'moment';

function validDate(date: Date | string | moment.Moment): boolean {
  return moment(date).isValid();
}

export { validDate };
