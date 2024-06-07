<script>
  import '../app.pcss'

  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<header>
  <nav class="z-50 bg-zinc-100 border-b-2 border-black">
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
        <a
          href="https://github.com"
          class="border-2 border-black p-1 rounded transition-shadow shadow-xy-2 hover:shadow-xy-1"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          href="https://linkedin.com"
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
    class="flex flex-row w-screen min-h-8 px-4 sm:px-8 lg:px-12 bg-zinc-100 border-t-2 border-black"
  >
    Copyright 2024, Prajeen Govardhanam
  </div>
</footer>
