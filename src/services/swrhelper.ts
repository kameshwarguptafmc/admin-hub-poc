import { getApiBaseUrl } from '@/utils/getApiBaseUrl';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ErrorType } from '../types/error'
import createAxiosInstance from '../utils/axiosInstance'

const axiosInstance = createAxiosInstance
const nextAxiosInstance = createAxiosInstance

export const createError = <T>(res: AxiosResponse<T> | AxiosError<T>): Promise<T> => {
  if (res instanceof AxiosError) {
    const error = new Error('Error has occurred')
    const errorInfo = res.response?.data ?? res
    const errorStatus = res.response?.status ?? 0
    const errorConfig = {
      ...error,
      info: errorInfo,
      status: errorStatus,
    }
    throw errorConfig
  } else {
    return Promise.resolve(res.data)
  }
}

const requestConfig = (options?: Record<string, unknown>): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  }
  return config
}

const getRequestUrl = (subDomain:string): string => {
  return `${getApiBaseUrl(subDomain)}`
}

export const getGuestRequest = async (url: string, subDomain: string): Promise<unknown | ErrorType> => {
  const res = await axios.get(`${getRequestUrl(subDomain)}${url}`, { ...requestConfig() })
  return createError(res)
}

export const postGuestRequest = async (
  url: string,
  data: unknown,
  subDomain:string,
  options?: Record<string, unknown>,
): Promise<unknown | ErrorType> => {
  const res = await axios.post(`${getRequestUrl(subDomain)}${url}`, data, { ...requestConfig(options) })
  return createError(res)
}

export const getAuthorizeRequest = async <T>(url: string, subDomain:string): Promise<T> => {
  const response = await axiosInstance(getRequestUrl(subDomain)).get(url)
  return createError(response) as T
}

export const postAuthorizeRequest = async (
  url: string,
  data: unknown,
  subDomain:string,
): Promise<unknown | ErrorType> => {
  const res = await axiosInstance(getRequestUrl(subDomain)).post(url, data)
  return createError(res)
}

export const patchAuthorizeRequest = async (
  url: string,
  data: unknown,
  subDomain:string,
): Promise<unknown | ErrorType> => {
  const res = await axiosInstance(getRequestUrl(subDomain)).patch(url, data)
  return createError(res)
}

export const deleteAuthorizeRequest = async (url: string, subDomain:string,): Promise<unknown | ErrorType> => {
  const res = await axiosInstance(getRequestUrl(subDomain)).delete(url)
  return createError(res)
}

export const getAuthorizeNextRequest = async (url: string, subDomain:string): Promise<unknown | ErrorType> => {
  const res = await nextAxiosInstance(getRequestUrl(subDomain)).get(url)
  return createError(res)
}
