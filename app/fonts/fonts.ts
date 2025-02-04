import { Playwrite_GB_S, Newsreader } from 'next/font/google';

const playwriteGBS = Playwrite_GB_S({
  weight: ['100', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const newsreader = Newsreader({
  weight: ['200', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

export { playwriteGBS, newsreader };