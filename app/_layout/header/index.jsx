'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='bg-secondary-foreground text-background relative h-screen overflow-hidden'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='https://jonidores.com/wp-content/uploads/2025/02/412050203_865734298568334_6425679950408963955_n-1.jpg'
        className='object-cover md:scale-125 md:object-contain'
        fill='true'
        sizes='100vw'
        priority
        alt='Joni Dores Personal Picture'
      />


      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Joni Dores
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Freelance</span>
              <span className='block'>Designer &amp; Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
