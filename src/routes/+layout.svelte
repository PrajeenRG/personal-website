<script>
  import '../app.pcss'
  import logo from '$lib/assets/logo.svg'
  import { name, socials } from '$lib/data.json'

  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte'
</script>

<svelte:head>
  <link rel="icon" href={logo} type="image/svg+xml" />
</svelte:head>
<header>
  <nav class="z-50 bg-white border-b-2 border-black">
    <div
      class="mx-auto w-screen min-h-16 px-4 sm:px-8 lg:px-12 flex flex-row place-content-between place-items-center"
    >
      <a href="/">
        <p class="text-xl font-bold">{name}</p>
      </a>
      <div class="flex flex-row gap-6 font-semibold place-items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Work</a>
        <a href="/blog">Blog</a>
        {#if socials.github}
          <a
            aria-label="github"
            href="https://github.com/{socials.github}"
            class="border-2 border-black p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
          >
            <IconBrandGithub size={24} />
          </a>
        {/if}
        {#if socials.linkedin}
          <a
            aria-label="linkedin"
            href="https://linkedin.com/in/{socials.linkedin}"
            class="border-2 border-black p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
          >
            <IconBrandLinkedin size={24} />
          </a>
        {/if}
      </div>
    </div>
  </nav>
</header>
<slot />
<footer>
  <div
    class="flex flex-row w-screen h-16 px-4 sm:px-8 lg:px-12 bg-white border-t-2 border-black place-items-center justify-between"
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
