import i18next from 'i18next'

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        hello: 'hello world'
      },
      pro: {
        hello2: 'hello world2'
      }
    },
    zh: {
      translation: {
        hello: '你好'
      },
      pro: {
        hello2: '你好2'
      }
    }
  }
})

export { i18next }
