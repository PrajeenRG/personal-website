<svelte:head>
	<title>Prajeen Govardhanam</title>
</svelte:head>
<div class="grid w-screen h-[98vh] place-items-center bg-white dark:bg-stone-900">
	<div class="flex flex-col place-items-center">
		<enhanced:img
			src="/src/lib/assets/display-picture.png?w=512;256;128"
			alt="Prajeen Govardhanam"
			class="h-48 w-48 md:h-64 md:w-64 rounded-full mb-4"
		/>
		<p class="name name-gradient text-transparent text-3xl md:text-5xl">Prajeen Govardhanam</p>
		<p class="tagline text-stone-900 dark:text-stone-300 text-lg md:text-2xl">Committing Code and Spreading Memes</p>
	</div>
</div>

<style lang="postcss">
	.name {
		@apply font-bold;
		@apply leading-snug;
		@apply text-center;
	}

	.tagline {
		@apply font-mono;
		@apply font-medium;
		@apply text-center;
	}

	.name-gradient {
		@apply bg-gradient-to-bl;
		@apply bg-clip-text;
		@apply from-amber-500;
		@apply to-rose-500;
	}
</style>
