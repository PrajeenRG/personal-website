<script>
  import '../app.pcss'
  import logo from '$lib/assets/logo.svg'
  import { name, socials } from '$lib/data.json'

  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte'
</script>

<svelte:head>
  <link rel="icon" href={logo} type="image/svg+xml" />
</svelte:head>
<header
  class="z-50 bg-white dark:bg-zinc-800 w-full xl:px-[5%] 2xl:px-[10%] border-b-2 border-black dark:border-zinc-100"
>
  <nav class="dark:text-zinc-100">
    <div
      class="mx-auto min-h-16 px-4 sm:px-8 lg:px-12 flex flex-row place-content-between place-items-center"
    >
      <a href="/">
        <p class="text-xl font-bold">{name}</p>
      </a>
      <div class="flex flex-row gap-6 font-semibold place-items-center">
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#work">Work</a>
        <a href="/blog">Blog</a>
        {#if socials.github}
          <a
            aria-label="github"
            href="https://github.com/{socials.github}"
            class="border-2 border-black dark:border-zinc-100 p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
          >
            <IconBrandGithub size={24} />
          </a>
        {/if}
        {#if socials.linkedin}
          <a
            aria-label="linkedin"
            href="https://linkedin.com/in/{socials.linkedin}"
            class="border-2 border-black dark:border-zinc-100 p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
          >
            <IconBrandLinkedin size={24} />
          </a>
        {/if}
      </div>
    </div>
  </nav>
</header>
<slot />
<footer
  class="bg-white dark:bg-zinc-800 border-t-2 border-black dark:border-zinc-100 dark:text-zinc-100 xl:px-[5%] 2xl:px-[10%]"
>
  <div
    class="flex flex-row w-full mx-auto h-16 px-4 sm:px-8 lg:px-12 place-items-center justify-between"
  >
    <p>Copyright {new Date().getFullYear()}, {name}. All Rights Reserved</p>
    <div class="flex gap-2">
      {#if socials.github}
        <a aria-label="github" href="https://github.com/{socials.github}">
          <IconBrandGithub size={24} />
        </a>
      {/if}
      {#if socials.linkedin}
        <a
          aria-label="linkedin"
          href="https://linkedin.com/in/{socials.linkedin}"
        >
          <IconBrandLinkedin size={24} />
        </a>
      {/if}
    </div>
  </div>
</footer>
