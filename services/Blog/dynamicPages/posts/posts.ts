import axios from 'axios'
export const postPages = () => {
  return axios.get('http://localhost:8080/posts').then(() => {
    // return response.data.map((res) => {
    //   return {
    //     payload: res,
    //     route: '/posts/' + res.id,
    //   }
    // })
  })
}
