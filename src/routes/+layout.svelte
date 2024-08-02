<script>
  import '../app.pcss'
  import logo from '$lib/assets/logo.svg'

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
        <p class="text-xl font-bold">Prajeen Govardhanam</p>
      </a>
      <div class="flex flex-row gap-6 font-semibold place-items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Work</a>
        <a href="/blog">Blog</a>
        <a
          aria-label="github"
          href="https://github.com/PrajeenRG"
          class="border-2 border-black p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          aria-label="linkedin"
          href="https://linkedin.com/in/PrajeenRG"
          class="border-2 border-black p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
        >
          <IconBrandLinkedin size={24} />
        </a>
      </div>
    </div>
  </nav>
</header>
<slot />
<footer>
  <div
    class="flex flex-row w-screen min-h-8 px-4 sm:px-8 lg:px-12 bg-white border-t-2 border-black"
  >
    Copyright 2024, Prajeen Govardhanam
  </div>
</footer>
