import i18next from 'i18next'
import { zh } from './lang/zh'
import { en } from './lang/en'

i18next.init({
  lng: 'en', //en , zh
  resources: {
    en,
    zh
  }
})

const t = i18next.t

export { i18next, t }
