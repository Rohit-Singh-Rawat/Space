import { atom } from 'recoil'

export const animeImageAtom = atom<string>({
  key: 'animeImageAtom',
  default: '/images/Kaori.jpg',
})
