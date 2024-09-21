import { Slider } from '~/components/shadcn/ui/slider';
import { Switch } from '~/components/shadcn/ui/switch';

import copy from './copy.svg';
import reload from './reload.svg';

export default function Generator() {
   return <div className="bg-[#090212] border rounded-2xl p-5 w-80 space-y-5 text-white text-sm shadow">
      <h2 className='text-xl text-center font-medium'>Password generator</h2>

      <div className='bg-[#26183C] rounded-xl px-4 py-3 flex items-center justify-between'>
         <div className='text-lg font-medium'>sZBseL181NEj</div>

         <div className='flex gap-1.5'>
            <img src={copy.src} alt="Copy" className='h-4 w-4 cursor-pointer' />
            <img src={reload.src} alt="Reload" className='h-4 w-4 cursor-pointer' />
         </div>
      </div>

      <div className='space-y-2'>
         <div className="text-gray-200 text-opacity-50">Length</div>

         <div className='bg-[#26183C] rounded-xl px-4 py-3 flex gap-3 items-center justify-between'>
            <div>12</div>

            <Slider />

            <div>36</div>
         </div>
      </div>

      <div className='space-y-3'>
         <h3 className='text-gray-200 text-opacity-50'>Settings</h3>

         <div className='bg-[#26183C] rounded-xl px-4 py-3 flex items-center justify-between'>
            <div>Include uppercase letters</div>

            <Switch className='data-[state=checked]:bg-[#CD5FFE] data-[state=unchecked]:bg-slate-500' />
         </div>

         <div className='bg-[#26183C] rounded-xl px-4 py-3 flex items-center justify-between'>
            <div>Include lowercase letters</div>

            <Switch className='data-[state=checked]:bg-[#CD5FFE] data-[state=unchecked]:bg-slate-500' />
         </div>

         <div className='bg-[#26183C] rounded-xl px-4 py-3 flex items-center justify-between'>
            <div>Include numbers</div>

            <Switch className='data-[state=checked]:bg-[#CD5FFE] data-[state=unchecked]:bg-slate-500' />
         </div>

         <div className='bg-[#26183C] rounded-xl px-4 py-3 flex items-center justify-between'>
            <div>Include symbols</div>

            <Switch className='data-[state=checked]:bg-[#CD5FFE] data-[state=unchecked]:bg-slate-500' />
         </div>
      </div>

      <button type="button" className='bg-[#CD5FFE] rounded-md py-2 w-full text-white font-medium'>Generate</button>
   </div>;
}