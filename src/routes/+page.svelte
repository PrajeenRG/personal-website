<script>
  import { IconBrandGoogleDrive, IconBrandGmail } from '@tabler/icons-svelte'
</script>

<svelte:head>
  <title>Prajeen Govardhanam | Software Developer</title>
  <meta
    name="description"
    content="A budding backend developer who loves to experiment with things which seem to be boundless. View the adventures through this twisty road of software development."
  />
</svelte:head>
<div
  id="hero"
  class="flex flex-col min-h-[80vh] w-screen bg-white place-items-center justify-center p-4 md:p-8 lg:p-12"
>
  <div class="text-center py-4 md:py-6 lg:py-8">
    <h1 class="text-7xl font-bold p-2 mb-2">
      Hey There! Step into my digital playground
    </h1>
    <p class="text-3xl font-mono font-medium p-2 mt-2">
      Juggling databases, APIs, and server-side scripts, I turn caffeine into
      scalable code and quirky commits.
    </p>
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
      href="mailto:contact@prajeen.com"
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
    <h1 class="text-5xl font-bold mb-2">About Me</h1>
    <p class="font-mono text-xl font-medium pt-4 pb-2 pr-4">
      With over a year of industry experience and many many side projects later,
      I’ve found my groove in the backend, where the real magic happens. I’m all
      about creating robust solutions that not only work but also bring joy to
      those who use them.
    </p>
    <p class="font-mono text-xl font-medium py-2 pr-4">
      My passion for software is as vast as the databases I manage. I believe in
      writing code that’s not just functional but also has personality. Whether
      it’s a clever algorithm or an API that sings, I ensure every line of code
      I craft has its own story to tell.
    </p>
    <p class="font-mono text-xl font-medium py-2 pr-4">
      On any given day, you can find me juggling JSON, wrestling with RESTful
      services, and having a ball with backend architecture. But it’s not all
      work and no play; I make sure there’s always time for a good laugh, a
      quirky commit, or a spontaneous brainstorming session with my rubber duck.
    </p>
  </div>
  <enhanced:img
    src="/src/lib/assets/profile-picture.jpg?w=1536;960;540;384"
    sizes="(min-width:3072px) 1536px, (min-width:1920px) 960px, (min-width:1080px) 540px, (min-width:768px) 384px"
    alt="Prajeen's Profile Photo"
    class="aspect-square object-center border-4 border-black rounded-xl shadow-xy-4 my-4 md:my-6 lg:my-8"
  />
</div>
