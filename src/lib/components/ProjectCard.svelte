<script>
  import { IconArrowUpRight } from '@tabler/icons-svelte'

  export let name = ''
  /**
   * @type string[] | undefined
   */
  export let languages = []
  export let shortDesc = ''
  /**
   * @typedef {Object} Link
   * @property {string} name
   * @property {string} href
   * @property {boolean} [insecure]
   */
  /** @type Link[] | undefined
   */
  export let links = []
</script>

<div
  class="flex flex-col rounded-lg gap-2 bg-yellow-300 dark:bg-yellow-700 border-[3px] border-black dark:border-zinc-100 shadow-xy-4 p-4 lg:p-6"
>
  <div class="mb-1">
    <h5 class="font-bold text-2xl mb-1">{name}</h5>
    {#if languages && languages.length > 0}
      <p class="font-semibold">{languages.join(', ')}</p>
    {/if}
  </div>
  <p>{shortDesc}</p>
  {#if links && links.length > 0}
    <div class="flex mb-1 mt-3 gap-2">
      {#each links as link}
        <a
          class="p-2 rounded-md border-2 border-black dark:border-zinc-100 uppercase hover:bg-black hover:text-yellow-300 hover:transition-colors dark:hover:text-yellow-700 dark:hover:bg-zinc-100"
          href={`${link.insecure ? 'http' : 'https'}://${link.href}`}
        >
          <span class="flex flex-row place-items-center">
            {link.name}
            <IconArrowUpRight />
          </span>
        </a>
      {/each}
    </div>
  {/if}
</div>
