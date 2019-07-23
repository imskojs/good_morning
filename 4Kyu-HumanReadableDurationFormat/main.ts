import {compose} from 'rambda'

interface Time {
  second?: number;
  minute?: number;
  hour?: number;
  day?: number;
  year?: number;
}

const getMinutes = (sec: number): Time => {
  const minute = Math.floor(sec / 60);
  if (minute === 0) {
    return {minute: 0, second: sec}
  }
  const second = sec - 60 * minute;
  return {minute, second}
};

const getHours = (time: Time): Time => {
  const hour = Math.floor(time.minute / 60);
  if (hour === 0) {
    return {...time, hour: 0}
  }
  const minute = time.minute - 60 * hour;
  return {...time, hour, minute}
};

const getDays = (time: Time): Time => {
  const day = Math.floor(time.hour / 24);
  if (day === 0) {
    return {...time, day: 0}
  }
  const hour = time.hour - 24 * day;
  return {...time, day, hour}
};

const getYears = (time: Time): Time => {
  const year = Math.floor(time.day / 365);
  if (year === 0) {
    return {...time, year: 0}
  }
  const day = time.day - 365 * year;
  return {...time, year, day}
};

const format = ({second, minute, hour, day, year}: Time): string => {

  if (second + minute + hour + day + year === 0) {
    return 'now'
  }

  return [{year}, {day}, {hour}, {minute}, {second}]
    .filter((time: Time) => Object.values(time)[0] > 0)
    .map((time: Time) => {
      const unit = Object.keys(time)[0];
      const value = time[unit];
      return `${value} ${value > 1 ? unit + 's' : unit}`;
    })
    .reduce((accum: string, val: string, index: number, self: string[]) => {
      if (index === self.length - 1) {
        return accum + val;
      } else if (index === self.length - 2) {
        return accum + val + ' and '
      }
      return accum + val + ', '
    }, '');

};


const formatDuration = (sec: number) => compose(
  format,
  getYears,
  getDays,
  getHours,
  getMinutes
)(sec);

export default formatDuration;
