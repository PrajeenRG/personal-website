<script>
  import { page } from '$app/stores'
  import { name } from '$lib/data.json'
</script>

<svelte:head>
  <title>{name} | {$page.status} {$page.error?.message}</title>
</svelte:head>
<div
  class="min-h-[88vh] w-screen 2xl:w-[80%] grid place-items-center dark:bg-zinc-800 dark:text-zinc-100"
>
  <div class="flex flex-col gap-3 place-items-center">
    <h1 class="font-bold text-5xl">Error {$page.status}</h1>
    <p class="text-xl">{$page.error?.message}</p>
  </div>
</div>
