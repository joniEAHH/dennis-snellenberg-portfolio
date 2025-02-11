'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';


import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('pt-PT', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setLocalTime(timeString);
    };

    // Update immediately
    updateTime();
    
    // Update every minute
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-12 pb-4 pt-10'>
      <div className='flex flex-wrap items-stretch justify-between gap-5'>
        <div className='flex gap-8'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>2022 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-7'>
              <time>{localTime}</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex gap-8'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
