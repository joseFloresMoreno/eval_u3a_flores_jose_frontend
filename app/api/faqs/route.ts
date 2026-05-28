import { NextResponse } from 'next/server';
import faqs from '../../../../data/faqs.json';

export async function GET() {
  return NextResponse.json(faqs);
}
