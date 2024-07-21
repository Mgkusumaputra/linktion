import clsx from 'clsx';
import Image from 'next/image';

import { getObjectByConfigValue } from '@/utils/config';

import FooterButton from '../components/footerButton';
import TreeButton from '../components/treeButton';
import { getConfigData, getSocialTree } from '../lib/notion';

async function fetchLinktreeData() {
  const res = getSocialTree();
  return res;
}
async function fetchConfigData() {
  const res = getConfigData();
  return res;
}

export default async function Home() {
  const linktreeContent = await fetchLinktreeData();
  const configContent = await fetchConfigData();

  const usernameConfig = getObjectByConfigValue(configContent, 'Username');
  const descriptionConfig = getObjectByConfigValue(
    configContent,
    'Description',
  );
  const iconConfig = getObjectByConfigValue(configContent, 'Icon');
  const isIconConfigAvalable = iconConfig?.value.trim() !== '';

  return (
    <div className='flex flex-col items-center justify-center px-10'>
      {/* Upper Content Section */}
      <div
        className={clsx(
          'flex flex-col items-center gap-7 text-center',
          iconConfig ? 'mt-16' : 'mt-[156px]',
        )}
      >
        {isIconConfigAvalable && (
          <Image
            width={64}
            height={64}
            src={iconConfig?.value as string}
            alt='Profile Icon'
            className='rounded-xl'
          />
        )}
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold text-typography-primary'>
            {usernameConfig?.value}
          </h1>
          <p className='text-xs font-normal text-typography-secondary'>
            {descriptionConfig?.value}
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
