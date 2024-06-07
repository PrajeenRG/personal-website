<script>
	import { IconBrandGoogleDrive, IconBrandGmail } from '@tabler/icons-svelte';
</script>

<div
	class="flex flex-col h-[90vh] w-screen bg-lime-400 place-items-center justify-center p-4 md:p-8 lg:p-12"
>
	<div class="text-center p-4 md:p-6 lg:p-8">
		<h1 class="text-7xl font-bold p-2 mb-1">Hey There! Step into my digital playground</h1>
		<p class="text-3xl font-medium p-2 mt-1">
			Juggling databases, APIs, and server-side scripts, I turn caffeine into scalable code and
			quirky commits.
		</p>
	</div>
	<div class="flex flex-row gap-6 text-center">
		<a
			class="rounded border-[3px] border-black shadow-xy-3 px-4 py-2 font-bold bg-yellow-400 transition-shadow hover:shadow-xy-1"
			href="/resume.pdf"><span class="inline-block"><IconBrandGoogleDrive /></span>Check Resume</a
		>
		<a
			class="rounded border-[3px] border-black shadow-xy-3 px-4 py-2 font-bold bg-red-400 transition-shadow hover:shadow-xy-1"
			href="mailto:jdoe@example.com"
			><span class="inline-block"><IconBrandGmail /></span>Send E-Mail</a
		>
	</div>
</div>
