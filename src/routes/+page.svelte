<script lang="ts">
	// import from static
	import logo from '$lib/assets/logo.png';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import Icon from '@iconify/svelte';
	import { scramble } from 'svelte-typewriter';

	import '$lib/css/bg.scss';
	import { onMount } from 'svelte';
	import { mouseGlowFollow } from '$lib/js/bg';
	import { ProjectTable, Project } from '$lib/components/home/project_table';
	import { fly } from 'svelte/transition';

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
	<!-- class="flex bg-gradient-to-r from-gray-900 to-zinc-900 xl:flex-row flex-col-reverse lg:flex-nowrap justify-center xl:items-left items-center w-full gap-8 xl:gap-16 pt-50 py-30 px-7" -->

	<div
		class="flex xl:flex-row flex-col-reverse lg:flex-nowrap justify-center xl:items-left items-center w-full gap-8 xl:gap-16 pt-30 md:pt-35 xl:pt-45 pb-30 xl:pb-40 px-7"
		id="intro-bg"
	>
		<div class="flex flex-col flex-wrap justify-center items-center xl:items-start right">
			<div>
				<h1
					class="font-extrabold mx-auto max-w-[800px] text-5xl mb-3 md:text-6xl lg:text-6xl xl:text-6xl xl:text-left text-center"
					use:scramble={{ scrambleDuration: 1200 }}
				>
					Software engineer, designer
				</h1>
				<p
					class="text-xl text-gray-300 xl:text-left xl:max-w-3xl text-center max-w-2xl xl:mx-0 mx-auto xl:text-2xl"
				>
					I'm a software engineer, an advocate for free and open-source software, and I love
					building new things. My name is Tomáš.
				</p>
			</div>

			<div class="flex flex-row flex-wrap items-center justify-center mt-8 md:mt-6 gap-3">
				<!-- Socials -->
				<div
					class="backdrop-blur-sm backdrop-brightness-40 bg-gray-500/30 rounded-full py-2 px-3 xl:mx-0 flex flex-row flex-wrap gap-5 w-fit"
				>
					<SocialLink href="https://codeberg.org/tomkoid" icon="simple-icons:codeberg" />
					<SocialLink href="https://github.com/tomkoid" icon="mdi:github" />
					<SocialLink href="https://fosstodon.org/@tomkoid" icon="mdi:mastodon" />
				</div>
				<a
					class="flex flex-row flex-wrap items-center gap-2 drop-shadow-md transition-all backdrop-blur-sm backdrop-brightness-50 bg-opacity-0 rounded-2xl hover:rounded-3xl hover:xl:px-4 hover:px-6 cursor-pointer bg-radial-[at_50%_75%] from-purple-800 from-20% via-60% to-purple-900 text-white px-4 py-3"
					href="mailto:tomkoid@disroot.org"
				>
					<Icon width="24" icon="mdi:email" />
					Contact me
				</a>
			</div>
		</div>

		<div class="left">
			<img
				class="w-48 md:w-64 xl:w-80 rounded-4xl drop-shadow-3xl border-dashed border-4 border-blue-500/70 hover:border-blue-500 transition-all"
				id="pfp"
				src={logo}
				alt="Moje profilova fotka"
			/>
		</div>
	</div>

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
	{/if}
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
