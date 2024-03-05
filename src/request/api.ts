export const baseUrl = 'http://localhost:8080'

//临时方案
export const legacyRootUrl = 'https://www.sectrend.com.cn/'
export const gotoLegacyUrl = (url: string) => {
  window.location.href = legacyRootUrl + url
}
