import { ReactComponent as Spain } from 'assets/spain.svg';
import { ReactComponent as China } from 'assets/china.svg';
import { ReactComponent as Japan } from 'assets/japan.svg';
import { ReactComponent as France } from 'assets/france.svg';
import { ReactComponent as Korea } from 'assets/korea.svg';
import { ReactComponent as India } from 'assets/india.svg';
import { ReactComponent as Search } from 'assets/search.svg';

export const icons = {
  SPAIN: Spain,
  CHINA: China,
  FRANCE: France,
  JAPAN: Japan,
  KOREA: Korea,
  INDIA: India,
  SEARCH: Search,
};

export const names = {
  SPAIN: 'Spanish',
  CHINA: 'Chinese',
  FRANCE: 'French',
  JAPAN: 'Japanese',
  KOREA: 'Korean',
  INDIA: 'Indian',
};

export const cultures = [
  {
    icon: icons.SPAIN,
    title: names.SPAIN,
  },
  {
    icon: icons.CHINA,
    title: names.CHINA,
  },
  {
    icon: icons.FRANCE,
    title: names.FRANCE,
  },
  {
    icon: icons.JAPAN,
    title: names.JAPAN,
  },
  {
    icon: icons.KOREA,
    title: names.KOREA,
  },
  {
    icon: icons.INDIA,
    title: names.INDIA,
  },
];
