import { getToken } from '@/types/session'
import axios, { AxiosInstance } from 'axios'

const createAxiosInstance = (baseUrl:string): AxiosInstance => {
  // Create a new Axios instance
  const instance = axios.create({
    baseURL: baseUrl, // Set the base URL for your requests, in case of next API calls we have empty base URl so that the relative path will concat with domain as prefix
    // Disabling the timeout as timeline v2 API takes more than specified time
    // timeout: 5000, // Set a timeout for requests (optional)
    headers: {
      'Content-Type': 'application/json',
      // Add any other default headers you need
    },
  })

  // Add request interceptor
  instance.interceptors.request.use(
    config => {
      // Modify the request config before sending it
      // For example, you can add an authentication token to the headers
      config.headers.Authorization = `Token ${getToken()}`
      return config
    },
    error => {
      // Handle request error
      return Promise.reject(error)
    },
  )

  // Add response interceptor
  instance.interceptors.response.use(
    response => {
      // Modify the response data if needed
      return response
    },
    error => {
      // Handle response error
      return Promise.reject(error)
    },
  )

  return instance
}

export default createAxiosInstance
