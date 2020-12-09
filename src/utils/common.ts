import _ from 'lodash';

export const timeout = (time: number): TODO => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const compile: TODO = function compile(template: string, data: TODO) {
  const result = template.replace(/{.+?}/g, function (matcher) {
    const path = matcher.slice(1, -1).trim();
    return _.get(data, path, '');
  });
  return result;
};

export const getAge = (date: string): number => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
