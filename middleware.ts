import { NextRequest, NextResponse } from 'next/server';

import { getRedirect } from './lib/notion';
import { kebabToSpace } from './utils/url';

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/link/')) {
    const path = req.nextUrl.pathname.split('/')[2];

    const displayPath = kebabToSpace(path);

    const redirectData = await getRedirect(displayPath);

    if (redirectData.display.includes(displayPath)) {
      try {
        await fetch(req.nextUrl.origin + '/api/increment', {
          method: 'POST',
          body: JSON.stringify(redirectData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return NextResponse.redirect(redirectData.redirect);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`increment for ${redirectData.display}:`, { error });
      }
    } else {
      return NextResponse.redirect('/404');
    }
  }
}
