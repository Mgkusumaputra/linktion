import Image from 'next/image';

import FooterButton from './components/footerButton';
import TreeButton from './components/treeButton';

const Linktree_Dummy_Data = [
  { title: 'Link 1', href: '/link-1' },
  { title: 'Link 2', href: '/link-2' },
  { title: 'Link 3', href: '/link-3' },
  { title: 'Link 4', href: '/link-4' },
  { title: 'Link 5', href: '/link-5' },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-10'>
      {/* Upper Content Section */}
      <div className='mt-16 flex flex-col items-center gap-7 text-center'>
        <Image
          width={64}
          height={64}
          src='/Memoji 1.png'
          alt='Profile Icon'
          className='rounded-xl'
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold text-[#F2F3F4]'>@Username</h1>
          <p className='text-xs font-normal text-[#E5E7E9]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            consectetur dictum.
          </p>
        </div>
      </div>
      {/* Linktree Content Section */}
      <div className='mt-9 flex w-full flex-col gap-3'>
        {Linktree_Dummy_Data.map((data, index) => (
          <TreeButton key={index} href={data.href} title={data.title} />
        ))}
      </div>
      {/* Footer Attribution */}
      <div className='mt-20'>
        <FooterButton />
      </div>
    </div>
  );
}
