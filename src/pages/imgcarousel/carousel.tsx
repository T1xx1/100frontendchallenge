import { useState } from 'react';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import left from './left.svg';
import right from './right.svg';

const imgs = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7
];

export default function Carousel() {
   const [index, setIndex] = useState(0);

   const scroll = (n: number) => {
      const newIndex = index + n;

      if (newIndex === -1) {
         setIndex(imgs.length - 1);
      } else if (newIndex === imgs.length) {
         setIndex(0);
      } else {
         setIndex(newIndex);
      }
   };

   return <div className='space-y-3'>
      <div className='w-full flex gap-3 items-center'>
         <button type='button' onClick={() => scroll(-1)}>
            <img src={left.src} alt='Previous' className='hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2 h-9 w-9' />
         </button>

         <img src={imgs[index].src} alt='Image' className='rounded-xl aspect-video h-80 object-cover' />

         <button type='button' onClick={() => scroll(+1)}>
            <img src={right.src} alt='Next' className='hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2 h-9 w-9' />
         </button>
      </div>

      <div className='flex gap-3 justify-center'>
         {imgs.map((img, i) => (
            <button type='button' onClick={() => setIndex(i)} key={i}>
               <img src={img.src} alt='Img' className={`rounded-lg h-16 w-16 object-cover ${i === index && 'outline outline-white'}`} />
            </button>
         ))}
      </div>
   </div>;
}