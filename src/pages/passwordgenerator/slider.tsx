import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "~/components/shadcn/utils";

const Slider = React.forwardRef<
   React.ElementRef<typeof SliderPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
   <SliderPrimitive.Root
      ref={ref}
      className={cn(
         "relative flex w-full touch-none select-none items-center",
         className
      )}
      {...props}
   >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-400 dark:bg-slate-800">
         <SliderPrimitive.Range className="absolute h-full bg-violet-500 dark:bg-slate-50" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-4 border-violet-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
   </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
