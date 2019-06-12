/* eslint-disable */

import moment from 'moment';

export const nowMilliseconds = () => new Date().getTime();
export const oneWeekinMilliseconds = 604800000;

export const weekNow = () => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment(nowMilliseconds()).day(i)._d);
  }
  return arr;
};

export const weekPrev = currentDate => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment(currentDate - oneWeekinMilliseconds).day(i)._d);
  }
  return arr;
};

export const weekNext = currentDate => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment(currentDate + oneWeekinMilliseconds).day(i)._d);
  }
  return arr;
};

export const weekExented = currentDate => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment(new Date(currentDate).getTime()).day(i)._d);
  }
  return arr;
};
