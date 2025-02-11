'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <img
              src='https://jonidores.com/wp-content/uploads/2025/02/412050203_865734298568334_6425679950408963955_n-1.jpg'
              className='rounded-full object-cover'
              fill={true}
              alt='Joni Dores'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='bg-muted-foreground h-[1px]' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:info@dennissnellenberg.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground w-full'
              >
                info@dennissnellenberg.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+31627847430'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground w-full'
              >
                +31 6 27 84 74 30
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
