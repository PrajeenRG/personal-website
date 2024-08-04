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
   */
  /** @type Link[] | undefined
   */
  export let links = []
</script>

<div class="card p-1 md:p-2 lg:p-4">
  <div class="mb-1">
    <h5 class="name">{name}</h5>
    {#if languages && languages.length > 0}
      <p class="language">{languages.join(', ')}</p>
    {/if}
  </div>
  <p>{shortDesc}</p>
  {#if links && links.length > 0}
    <div class="link-container">
      {#each links as link}
        <a class="link" href={link.href}>
          <span class="flex flex-row place-items-center">
            {link.name}
            <IconArrowUpRight />
          </span>
        </a>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .card {
    @apply flex;
    @apply flex-col;
    @apply gap-2;
    @apply bg-yellow-300;
    @apply border-[3px];
    @apply border-black;
    @apply shadow-xy-3;
  }

  .name {
    @apply text-2xl;
    @apply font-bold;
    @apply mb-1;
  }

  .language {
    @apply font-semibold;
  }

  .link-container {
    @apply flex;
    @apply mb-1;
    @apply mt-3;
    @apply gap-2;
  }

  .link {
    @apply px-2;
    @apply py-2;
    @apply border-2;
    @apply border-black;
    @apply uppercase;
  }

  .link:hover {
    @apply bg-black;
    @apply text-white;
    @apply transition-colors;
  }
</style>
