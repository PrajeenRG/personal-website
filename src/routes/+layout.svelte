<script>
	import '../app.pcss';
	import '@fontsource/dm-mono';
	import '@fontsource-variable/jost';
	import '@fontsource/jost';

	import { page } from '$app/stores';

	const navigations = [
		{
			slug: '/',
			name: 'Home'
		},
		{
			slug: '/blog',
			name: 'Blog'
		},
		{
			slug: '/about',
			name: 'About'
		},
		{
			slug: '/contact',
			name: 'Contact'
		}
	];
</script>

<nav class="absolute top-0 z-50 flex h-16 w-screen place-items-center justify-between bg-white px-16 dark:bg-stone-900">
	<a href="/">
		<enhanced:img src="/src/lib/assets/logo.png?w=128;64;32" alt="Prajeen Govardhanam" class="h-8 w-8" />
	</a>
	<div class="flex gap-4 text-sm font-semibold">
		{#each navigations as { slug, name }}
			<a
				href={slug}
				class={$page.url.pathname == slug
					? 'text-stone-600 dark:text-stone-400'
					: 'text-stone-400 dark:text-stone-600'}>{name}</a
			>
		{/each}
	</div>
</nav>
<slot />
<footer
	class="flex flex-col place-items-center justify-evenly border-t-2 border-stone-200 bg-white px-8 py-2 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400"
>
	<p class="text-sm">© 2024 Prajeen Govardhanam</p>
	<p class="text-xs">Powered by SvelteKit</p>
</footer>
