import { clsx } from 'clsx';
import Link from 'next/link';

interface TreeButtonProps {
  href: string;
  title: string;
}

export default function TreeButton({ href, title }: TreeButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex w-full items-center justify-center rounded-xl border border-typography-primary px-2 py-2',
        'transition-colors hover:bg-typography-primary hover:shadow-xl',
      )}
    >
      <p className='text-lg font-medium text-typography-primary group-hover:text-secondary'>
        {title}
      </p>
    </Link>
  );
}
