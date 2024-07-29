import Script from 'next/script';

export function UmamiScript() {
  const props = {
    'data-website-id': process.env.UMAMI_WEBSITE_ID,
    src: process.env.UMAMI_SRC,
  };
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) return null;
  return (
    <Script
      async
      defer
      id='umami-analytics'
      strategy='afterInteractive'
      {...props}
    />
  );
}
