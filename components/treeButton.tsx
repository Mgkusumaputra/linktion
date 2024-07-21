import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { PageIcon } from '@/types/notion';

interface TreeButtonProps {
  href: string;
  title: string;
  icon: PageIcon;
}

export default function TreeButton({ href, title, icon }: TreeButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex w-full items-center justify-center gap-1 rounded-xl border border-typography-primary px-2 py-2',
        'transition-colors hover:bg-typography-primary hover:shadow-xl',
      )}
    >
      {icon ? (
        icon.type === 'emoji' ? (
          icon.emoji + ' '
        ) : icon.type === 'external' ? (
          <Image
            src={icon.external.url}
            width={16}
            height={16}
            className='text-transparent'
            alt={`${title} Icon`}
          />
        ) : (
          <Image
            src={icon.file.url}
            width={16}
            height={16}
            className='text-transparent'
            alt={`${title} Icon`}
          />
        )
      ) : null}
      <p className='text-base font-medium text-typography-primary group-hover:text-secondary'>
        {title}
      </p>
    </Link>
  );
}
