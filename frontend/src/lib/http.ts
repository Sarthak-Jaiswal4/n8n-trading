import axios, { type AxiosRequestConfig, type AxiosError } from "axios"

const DEFAULT_API_BASE_URL = "http://localhost:3000"

export const API_BASE_URL =
  (import.meta as any).env?.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

type RequestOptions = AxiosRequestConfig & {
  auth?: boolean
}

async function request<T>(
  path: string,
  method: HttpMethod,
  options: RequestOptions = {},
): Promise<T> {
  const { auth, headers, ...rest } = options

  const config: AxiosRequestConfig = {
    url: `${API_BASE_URL}${path}`,
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    ...rest,
  }

  if (auth) {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `${token}`
      }
    }
  }
  console.log(options.data)
  try {
    const response = await axios.request<T>(config)
    console.log(response.data)
    return response.data
  } catch (error) {
    const err = error as AxiosError<any>
    const data = err.response?.data
    const message =
      (data && typeof data === "object" && "message" in data && (data as any).message) ||
      err.message ||
      `Request to ${path} failed`

    throw new Error(String(message))
  }
}

export const http = {
  get:   <T>(path: string, options?: RequestOptions) => request<T>(path, "GET", options),
  post:  <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, "POST", { data: body, ...options }),
  put:   <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, "PUT", { data: body, ...options }),
  patch: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, "PATCH", { data: body, ...options }),
  delete:<T>(path: string, options?: RequestOptions) => request<T>(path, "DELETE", options),
}