<script lang="js">
	import { page } from '$app/stores';
</script>

<div
	class="flex h-[98vh] w-screen flex-col place-items-center justify-center bg-white dark:bg-stone-900"
>
	<p class="text-5xl font-bold text-black md:text-8xl dark:text-stone-100">{$page.status}</p>
	<p class="text-lg text-black md:text-2xl dark:text-stone-300">{$page.error?.message}</p>
</div>
