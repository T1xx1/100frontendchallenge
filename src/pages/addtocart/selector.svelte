<script lang="ts">
   import type { ImageMetadata } from 'astro';

   import shirt1 from './shirt1.jpg';
   import shirt2 from './shirt2.jpg';
   import shirt3 from './shirt3.jpg';

   const shirts = [shirt1, shirt2, shirt3];

   $: selected = shirts[0];

   const select = (shirt: ImageMetadata) => {
      selected = shirt;
   };
</script>

<div class="flex gap-3 items-start">
   <div class="flex flex-col gap-3">
      {#each shirts as shirt}
         <button type="button" on:click={() => select(shirt)}>
            <img
               src={shirt.src}
               alt="Shirt"
               class={`rounded-lg h-16 w-14 object-cover ${shirt === selected && 'outline outline-[3.5px] outline-blue-700'}`}
            />
         </button>
      {/each}
   </div>

   <img src={selected.src} alt="Shirt" class="rounded-lg h-96 w-72 object-cover" />
</div>
