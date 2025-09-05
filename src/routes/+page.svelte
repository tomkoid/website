<script lang="ts">
	import '$lib/css/bg.scss';
	import { onMount } from 'svelte';
	import { mouseGlowFollow } from '$lib/js/bg';
	import { fly } from 'svelte/transition';
	import About from '$lib/components/home/About.svelte';
	import MainCard from '$lib/components/home/MainCard.svelte';
	import Projects from '$lib/components/home/Projects.svelte';

	let visible = $state(false);

	onMount(() => {
		mouseGlowFollow();

		setTimeout(() => {
			visible = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Tomkoid</title>
</svelte:head>

<div class="bg-gradient-to-r from-gray-900 to-zinc-900 min-h-screen h-fit">
	<MainCard />

	{#if visible}
		<Projects />
		<About />
	{/if}
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
