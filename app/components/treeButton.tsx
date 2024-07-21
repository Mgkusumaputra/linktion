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
        'group flex w-full items-center justify-center rounded-xl border border-[#F2F3F4] px-2 py-2',
        'transition-colors hover:bg-[#F2F3F4] hover:shadow-xl',
      )}
    >
      <p className='text-lg font-medium text-[#F2F3F4] group-hover:text-[#2C3E50]'>
        {title}
      </p>
    </Link>
  );
}
