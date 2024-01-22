import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const toFixedWithoutZeros = (num: number, precision: number) =>
  `${Number.parseFloat(num.toFixed(precision))}`;

export const moveKrToEnd = (inputString: string): string => {
    let words: string[] = inputString.split(" ");
    if (words.length >= 2 && words[0] === "kr") {
        let newString: string = words.slice(1).concat(words[0]).join(" ");
        return newString;
    } else {
        return inputString;
    }
}

export function hasKeyValuePair(key: string, valueToCheck: string, params: any) {
  for (const [paramKey, paramValue] of params.entries()) {
    if (paramKey === key && paramValue === valueToCheck) {
      return true; // Key-value pair found
    }
  }
  return false; // Key-value pair not found
}
