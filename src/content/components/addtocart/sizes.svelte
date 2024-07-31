<script lang="ts">
   const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

   $: selected = sizes[0];

   const select = (size: string) => {
      selected = size;
   };
</script>

<div class="mt-4 space-y-1">
   <div class="font-semibold">Choose size</div>

   <div class="flex gap-2 items-center">
      {#each sizes as size}
         <button
            type="button"
            class={`hover:bg-gray-300 rounded h-8 w-8 flex items-center justify-center ${size === selected && 'outline outline-blue-700'}`}
            on:click={() => select(size)}>{size}</button
         >
      {/each}
   </div>
</div>
