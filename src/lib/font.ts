import localFont from 'next/font/local'

export const neu = localFont({
  src: [
    {
      path: '../../public/font/NeueMachina-Light.otf',
      weight: '200',
    },
    {
      path: '../../public/font/NeueMachina-Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/font/NeueMachina-Ultrabold.otf',
      weight: '700',
    },
  ],
  variable: '--font-neu',
})
export const lombok = localFont({
  src: [
    {
      path: '../../public/font/Lombok Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-lombok',
})
export const cath = localFont({
  src: [
    {
      path: '../../public/font/CATHSGBR.ttf',
      weight: '400',
    },
  ],
  variable: '--font-cath',
})
