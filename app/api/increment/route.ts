import { NextRequest, NextResponse } from 'next/server';

import { incrementLinkCount } from '@/lib/notion';

export async function POST(req: NextRequest) {
  const body = await new Response(req.body).json();
  if (!body.id) {
    throw Error('id not sent through body');
  }

  const increaseLink = await incrementLinkCount(body);

  return NextResponse.json({
    message: 'Link Count Increased!',
    data: increaseLink,
  });
}
