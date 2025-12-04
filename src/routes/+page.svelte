<script lang="ts">
	import '$lib/css/bg.scss';
	import { onMount } from 'svelte';
	import { mouseGlowFollow } from '$lib/js/bg';
	import About from '$lib/components/home/About.svelte';
	import MainCard from '$lib/components/home/MainCard.svelte';
	import Projects from '$lib/components/home/Projects.svelte';
	import Main from '$lib/components/home/Main.svelte';

	let visible = $state(false);

	onMount(() => {
		mouseGlowFollow();

		// delay showing projects
		setTimeout(() => {
			visible = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Tomkoid</title>
</svelte:head>

<Main>
	<MainCard />

	{#if visible}
		<Projects />
		<About />
	{/if}
</Main>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
