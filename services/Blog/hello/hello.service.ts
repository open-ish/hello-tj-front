import axios from 'axios'

const index = async () => {
  try {
    const response = await axios.get('http://localhost:8080/about')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const helloApi = {
  index,
}

export default helloApi
