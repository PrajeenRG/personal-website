<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import { IconBrandGoogleDrive, IconBrandGmail } from '@tabler/icons-svelte'
  import banner from '$lib/assets/banner.png'

  /** @type {import('./$types').PageServerData} */
  export let data
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>{data.title}</title>
  <meta name="description" content={data.description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://prajeen.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content={banner} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="prajeen.com" />
  <meta property="twitter:url" content="https://prajeen.com" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={banner} />
</svelte:head>
<div
  id="hero"
  class="flex flex-col min-h-[80vh] w-screen bg-white place-items-center justify-center p-4 md:p-8 lg:p-12"
>
  <div class="text-center py-4 md:py-6 lg:py-8">
    <h1 class="text-7xl font-bold p-2 mb-2">{data.hero.main}</h1>
    <p class="text-3xl p-2 mt-2">{data.hero.sub}</p>
  </div>
  <div class="flex flex-row gap-6 text-center text-lg">
    <a
      class="rounded border-[3px] border-black shadow-xy-3 px-4 py-2 font-bold bg-yellow-400 transition-shadow hover:shadow-xy-1"
      href="/resume.pdf"
    >
      <span class="flex flex-row gap-2 place-items-center justify-between">
        <IconBrandGoogleDrive size={32} />View Resume
      </span>
    </a>
    <a
      class="rounded border-[3px] border-black shadow-xy-3 px-4 py-2 font-bold bg-red-400 transition-shadow hover:shadow-xy-1"
      href="mailto:{data.socials.email}"
    >
      <span class="flex flex-row gap-2 place-items-center justify-between">
        <IconBrandGmail size={32} />Send E-Mail
      </span>
    </a>
  </div>
</div>
<div
  id="about"
  class="grid w-screen grid-rows-1 grid-cols-3 gap-12 bg-white place-items-center p-6 md:p-12 lg:p-[4.5rem]"
>
  <div class="h-full col-span-2 py-4 md:py-6 lg:py-8">
    <h3 class="text-5xl font-bold mb-4">About Me</h3>
    {#each data.about.paragraphs as para}
      <p class="text-xl py-2 pr-4">{para}</p>
    {/each}
  </div>
  <enhanced:img
    src="/src/lib/assets/profile-picture.png?w=1536;960;540;384"
    sizes="(min-width:3072px) 1536px, (min-width:1920px) 960px, (min-width:1080px) 540px, (min-width:768px) 384px"
    alt="Prajeen's Profile Picture"
    class="aspect-square object-center border-4 border-black rounded-xl shadow-xy-4 my-4 md:my-6 lg:my-8"
  />
</div>

<div id="projects" class="w-screen bg-white p-6 md:p-12 lg:p-[4.5rem]">
  <h3 class="text-5xl font-bold mb-2">Projects</h3>
  <div class="grid grid-flow-row grid-cols-3 gap-12 my-4 md:my-6 lg:my-8">
    {#each data.projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</div>
