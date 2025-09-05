<script lang="ts">
	import '$lib/css/bg.scss';
	import { onMount } from 'svelte';
	import { mouseGlowFollow } from '$lib/js/bg';
	import { ProjectTable, Project } from '$lib/components/home/project_table';
	import { fly } from 'svelte/transition';
	import About from '$lib/components/home/About.svelte';
	import MainCard from '$lib/components/home/MainCard.svelte';

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
		<section class="py-5 pb-20 px-7 max-w-5xl mx-auto" transition:fly>
			<p class="text-xl text-gray-300 text-center xl:text-left mb-10">
				Over the years, I’ve worked on several projects. Here are some of the things I’d most like
				you to see:
			</p>

			<ProjectTable>
				<Project
					name="Stravule"
					description="Automatic food picker for strava.cz that selects meals based on user-defined filters"
					link="https://codeberg.org/tomkoid/stravule"
					logoPath="/logos/stravule.webp"
				/>
				<Project
					name="reŠOL"
					description="A modern, privacy-focused web app improving the Škola OnLine experience"
					link="https://codeberg.org/resol/resol"
					logoPath="/logos/resol-logo.webp"
				/>
				<Project
					name="Image Chat"
					description="An open-source application that uses AI to analyze photos and describes their contents using text-to-speech technology (2024 AimtecHackathon winning project)"
					link="https://gitlab.com/danielzierl/image-chat"
					logoPath="/logos/image-chat.webp"
				/>
				<Project
					name="Final Trial"
					description="A simple game made in Godot engine that runs on Android, PC and web. Your goal is to bounce the good guys to Heaven and let the bad ones fall to Hell"
					link="https://codeberg.org/dystopia/final-trial"
					logoPath="/logos/final-trial.webp"
				/>
				<Project
					name="Blokator"
					description="System-wide CLI adblocker for Linux, MacOS and Windows using the system's hosts file"
					link="https://codeberg.org/tomkoid/blokator"
					logoPath="/logos/blokator.webp"
				/>
				<Project
					name="mdhtml"
					description="Really simple CLI Markdown to HTML converter with styling support written in Go"
					link="https://codeberg.org/tomkoid/mdhtml"
					logoPath="/logos/mdhtml.webp"
				/>
			</ProjectTable>
		</section>

		<About />
	{/if}
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
