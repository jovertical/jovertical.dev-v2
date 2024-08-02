import { ApiError } from '@datocms/cma-client'
import { NextResponse } from 'next/server'
import { serializeError } from 'serialize-error'

export function withCORS(responseInit?: ResponseInit): ResponseInit {
  return {
    ...responseInit,
    headers: {
      ...responseInit?.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  }
}

export function handleUnexpectedError(error: unknown) {
  try {
    throw error
  } catch (e) {
    console.error(e)
  }

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        request: error.request,
        response: error.response,
      },
      withCORS({ status: 500 })
    )
  }

  return invalidRequestResponse(serializeError(error), 500)
}

export function invalidRequestResponse(error: unknown, status = 422) {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    withCORS({ status })
  )
}

export function successfulResponse(data?: unknown, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    withCORS({ status })
  )
}

export const match = <Data>(
  key: keyof typeof data,
  data: Partial<{ DEFAULT: any } & Data>
): (typeof data)[keyof typeof data] | null => {
  return data[key] ?? data.DEFAULT ?? null
}

export const rescue = async <T extends any>(
  callback: () => Promise<T> | T,
  defaultValue?: T
) => {
  try {
    return await callback()
  } catch (error: any) {
    console.error(error)

    return defaultValue as T
  }
}

export const sleep = (ms = 1000): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
