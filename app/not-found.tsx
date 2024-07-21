'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(countdown);
          router.push('/');
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [router]);

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-2 text-center'>
      <div>
        <h1 className='text-xl font-normal text-typography-primary'>
          <span className='underline-offset-3 font-semibold underline'>
            {pathname}
          </span>{' '}
          is not found
        </h1>
        <p className='text-xs font-normal text-typography-secondary'>
          Redirecting in {seconds} seconds...
        </p>
      </div>
    </div>
  );
}
