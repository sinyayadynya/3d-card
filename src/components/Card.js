import React from 'react';
// icon
import KgIcon from '../img/dest-kyrgyzstan.svg';
// kyrgyzstan img
import KgImg from '../img/kyrgyz-kalpak.webp';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[360px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={KgIcon} alt='' />
        </div>
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Kyrgyzstan</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
          Lorem ipsum dolor sit amet. Sed velit quia ea animi reiciendis non asperiores optio est asperiores maxime sed mollitia dolorem et neque beatae!
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            Discover
          </button>
        </div>
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-60 -right-16 w-[212px]'
        >
          <img src={KgImg} alt='' className='w-52' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
