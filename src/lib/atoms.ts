import { atom } from 'recoil'

export const animeImageAtom = atom<string>({
  key: 'animeImageAtom',
  default: '/images/Kaori.jpg',
})
export const hamburgerMenuState = atom({
  key: 'hamburgerMenuState',
  default: false,
})
