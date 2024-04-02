<svelte:head>
	<title>Prajeen Govardhanam</title>
</svelte:head>
<div class="grid w-screen h-[98vh] place-items-center bg-white dark:bg-stone-900">
	<div class="flex flex-col place-items-center">
		<enhanced:img
			src="/src/lib/assets/display-picture.png"
			alt="Prajeen Govardhanam"
			class="h-64 w-64 rounded-full mb-4"
			sizes="min(256px, 16rem)"
		/>
		<p class="name name-gradient text-transparent">Prajeen Govardhanam</p>
		<p class="tagline text-stone-900 dark:text-stone-300">Committing Code and Spreading Memes</p>
	</div>
</div>

<style lang="postcss">
	.name {
		@apply font-bold;
		@apply text-5xl;
		@apply leading-snug;
		@apply text-center;
	}

	.tagline {
		@apply font-mono;
		@apply font-medium;
		@apply text-xl;
		@apply text-center;
	}

	.name-gradient {
		@apply bg-gradient-to-bl;
		@apply bg-clip-text;
		@apply from-amber-500;
		@apply to-rose-500;
	}
</style>
