import Image from 'next/image';

import FooterButton from './components/footerButton';
import TreeButton from './components/treeButton';
import { getSocialTree } from './lib/notion';

const Linktree_Dummy_Data = [
  { title: 'Link 1', href: '/link-1' },
  { title: 'Link 2', href: '/link-2' },
  { title: 'Link 3', href: '/link-3' },
  { title: 'Link 4', href: '/link-4' },
  { title: 'Link 5', href: '/link-5' },
];

async function fetchLinktreeData() {
  const res = getSocialTree();
  return res;
}

export default async function Home() {
  const linktreeContent = await fetchLinktreeData();

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
          <h1 className='text-xl font-semibold text-typography-primary'>
            @Username
          </h1>
          <p className='text-xs font-normal text-typography-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            consectetur dictum.
          </p>
        </div>
      </div>
      {/* Linktree Content Section */}
      <div className='mt-9 flex w-full flex-col gap-3'>
        {linktreeContent.map((data, index) => (
          <TreeButton key={index} href={data.redirect} title={data.display} />
        ))}
      </div>
      {/* Footer Attribution */}
      <div className='mt-20'>
        <FooterButton />
      </div>
    </div>
  );
}
