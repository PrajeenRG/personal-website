<script>
  import { IconBrandGoogleDrive, IconBrandGmail } from '@tabler/icons-svelte'
  import picture from '$lib/assets/profile-picture.jpg'
</script>

<div
  id="hero"
  class="flex flex-col h-[90vh] w-screen bg-lime-400 place-items-center justify-center p-4 md:p-8 lg:p-12"
>
  <div class="text-center py-4 md:py-6 lg:py-8">
    <h1 class="text-7xl font-bold p-2 mb-1">
      Hey There! Step into my digital playground
    </h1>
    <p class="text-3xl font-medium p-2 mt-1">
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
        <IconBrandGoogleDrive size={32} />Check Resume
      </span>
    </a>
    <a
      class="rounded border-[3px] border-black shadow-xy-3 px-4 py-2 font-bold bg-red-400 transition-shadow hover:shadow-xy-1"
      href="mailto:jdoe@example.com"
    >
      <span class="flex flex-row gap-2 place-items-center justify-between">
        <IconBrandGmail size={32} />Send E-Mail
      </span>
    </a>
  </div>
</div>
<div
  id="about"
  class="grid w-screen grid-rows-1 grid-cols-3 gap-12 bg-zinc-100 place-items-center p-6 md:p-12 lg:p-[4.5rem]"
>
  <div class="h-full col-span-2 py-4 md:py-6 lg:py-8">
    <h1 class="text-5xl font-bold mb-2">About Me</h1>
    <p class="text-xl font-medium pt-4 pb-2 pr-4">
      With over a year of industry experience and many many side projects later,
      I’ve found my groove in the backend, where the real magic happens. I’m all
      about creating robust solutions that not only work but also bring joy to
      those who use them.
    </p>
    <p class="text-xl font-medium py-2 pr-4">
      My passion for software is as vast as the databases I manage. I believe in
      writing code that’s not just functional but also has personality. Whether
      it’s a clever algorithm or an API that sings, I ensure every line of code
      I craft has its own story to tell.
    </p>
    <p class="text-xl font-medium py-2 pr-4">
      On any given day, you can find me juggling JSON, wrestling with RESTful
      services, and having a ball with backend architecture. But it’s not all
      work and no play; I make sure there’s always time for a good laugh, a
      quirky commit, or a spontaneous brainstorming session with my rubber duck.
    </p>
  </div>
  <img
    src={picture}
    alt=""
    class="aspect-square object-center border-4 border-black rounded-xl shadow-xy-4 my-4 md:my-6 lg:my-8"
  />
</div>
