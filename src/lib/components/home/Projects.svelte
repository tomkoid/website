<script lang="ts">
	import { ProjectTable, Project } from '$lib/components/home/project_table';
	import { fly } from 'svelte/transition';
</script>

<section class="py-5 pb-20 px-7 max-w-5xl mx-auto" transition:fly>
	<p class="text-xl text-gray-300 text-center xl:text-left mb-10">
		Over the years, I’ve worked on several projects. Here are some of the things I’d most like you
		to see:
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
