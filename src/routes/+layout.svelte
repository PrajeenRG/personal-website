<script>
	import '../app.pcss';
	import '@fontsource/dm-mono';
	import '@fontsource/plus-jakarta-sans';

	import Logo from '$lib/assets/logo.svg';
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

<nav class="flex h-16 place-items-center justify-between bg-white px-16 dark:bg-stone-900">
	<a href="/">
		<img src={Logo} alt="Prajeen Govardhanam" class="h-8 w-8" width="32px" height="32px" />
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
