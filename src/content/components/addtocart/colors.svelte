<script lang="ts">
   const colors = [
      'bg-[#ff8080]',
      'bg-[#80ff80]',
      'bg-[#8080ff]',
      'bg-[#ffff80]',
      'bg-[#80ffff]',
      'bg-[#ff80ff]',
   ];

   $: selected = colors[0];

   const select = (color: string) => {
      selected = color;
   };
</script>

<div class="mt-4 space-y-1">
   <div class="font-semibold">Choose color</div>

   <div class="flex gap-2 items-center">
      {#each colors as color}
         <button
            type="button"
            class={`rounded h-8 w-8 shadow ${color} ${color === selected && 'outline outline-blue-700'}`}
            on:click={() => select(color)}
         ></button>
      {/each}
   </div>
</div>
