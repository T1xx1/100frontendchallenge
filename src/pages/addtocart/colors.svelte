<script lang="ts">
   const colors = [
      'bg-red-500',
      'bg-green-500',
      'bg-violet-500',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-pink-500',
      'bg-gray-400'
   ];

   $: selected = colors[0];

   const select = (color: string) => {
      selected = color;
   };
</script>

<div class="mt-4 space-y-2">
   <div class="font-semibold">Choose color</div>

   <div class="flex gap-2.5 items-center">
      {#each colors as color}
         <button
            type="button"
            class={`bg-opacity-80 rounded h-8 w-8 ${color} ${color === selected && 'outline outline-blue-700'}`}
            on:click={() => select(color)}
         ></button>
      {/each}
   </div>
</div>
