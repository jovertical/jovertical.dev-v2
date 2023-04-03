import { NextResponse } from 'next/server';

export const json = (data: any, status: number = 200) => {
  return NextResponse.json(status >= 400 ? { message: data, status } : data, {
    status,
  });
};
