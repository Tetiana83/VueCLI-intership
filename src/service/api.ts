import axios, { AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: 'https://vue-api-intership.herokuapp.com/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default http
