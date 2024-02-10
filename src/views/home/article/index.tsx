import { Content } from './content'

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   if (!res.ok) {
//     // 这会触发最近的 `error.js` 错误边界
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export const Article: React.FC = () => {
  //const data = await getData()
  return <Content />
}
