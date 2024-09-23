<script lang="ts">
   import shirt1 from './shirt1.jpg';
   import shirt2 from './shirt2.jpg';
   import shirt3 from './shirt3.jpg';

   const shirts = [shirt1.src, shirt2.src, shirt3.src];

   $: selected = shirts[0];

   const select = (shirt: string) => {
      selected = shirt;
   };
</script>

<div class="flex gap-3 items-start">
   <div class="flex flex-col gap-3">
      {#each shirts as shirt}
         <button type="button" on:click={() => select(shirt)}>
            <img
               src={shirt}
               alt="Shirt"
               class={`rounded-md h-16 w-14 object-cover ${shirt === selected && 'outline outline-[3.5px] outline-blue-700'}`}
            />
         </button>
      {/each}
   </div>

   <img src={selected} alt="Shirt" class="rounded-lg h-96 w-72 object-cover" />
</div>
