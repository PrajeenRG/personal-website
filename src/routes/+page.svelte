<svelte:head>
	<title>Prajeen Govardhanam</title>
</svelte:head>
<div class="grid h-[98vh] w-screen place-items-center bg-white dark:bg-stone-900">
	<div class="flex flex-col place-items-center">
		<enhanced:img
			src="/src/lib/assets/prajeen.jpg?w=512;256;128"
			alt="Prajeen Govardhanam"
			class="mb-4 h-48 w-48 rounded-full border-4 border-orange-600 shadow-orange-800 shadow-sm md:shadow-md md:h-64 md:w-64"
		/>
		<p class="name name-gradient text-3xl text-transparent md:text-5xl">Prajeen Govardhanam</p>
		<p class="tagline text-lg text-stone-900 md:text-2xl dark:text-stone-300">
			Committing Code and Spreading Memes
		</p>
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
