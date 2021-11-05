import get from 'lodash/get';
import { IContractItem } from 'store/contracts/contractsAll/entities';

export const filterBy =
  (value: string, keys: string[]) => (el: IContractItem) => {
    let strForSearch = '';
    keys.forEach((key) => (strForSearch += ` ${get(el, key, '')}`));
    return strForSearch.toLowerCase().includes(value);
  };

export const getWordWithEnd = (word: string, items: number) => {
  if (items === 1) return word;
  if (items > 1 && items < 5) return (word += 'а');
  return (word += 'ов');
};
