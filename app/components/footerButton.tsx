import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterButton() {
  return (
    <Link
      className={clsx(
        'inline-flex animate-shimmer items-center justify-center gap-1 rounded-md border border-[#d4e1f4] px-3 py-1 text-xs font-semibold text-black transition-colors',
        'bg-[linear-gradient(110deg,#cfdef3,45%,#e7eff9,55%,#cfdef3)] bg-[length:200%_100%]',
        'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
      )}
      href='https://links.mgkusumaputra.me/Linktion'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        width={20}
        height={20}
        src='/linktionLogo.png'
        alt='Linktion Logo'
      />
      Create Your Linktion
    </Link>
  );
}
