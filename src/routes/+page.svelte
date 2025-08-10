<script lang="ts">
	// import from static
	import logo from '$lib/assets/logo.png';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import { onMount } from 'svelte';
</script>

<div>
	<div
		class="flex xl:flex-row flex-col lg:flex-nowrap justify-center xl:items-left items-center w-full gap-0 xl:gap-16 pt-20"
	>
		<div class="left">
			<img class="w-32 px-10 md:px-0" id="pfp" src={logo} alt="Moje profilova fotka" />
		</div>

		<div class="flex flex-col justify-center right text-center xl:text-left">
			<div>
				<h1 class="font-extrabold text-4xl mb-3 md:text-6xl lg:text-5xl xl:text-6xl">Tomkoid</h1>
				<p class="text-xl text-gray-300 xl:text-left xl:max-w-3xl text-center w-full xl:text-2xl">
					Hi, I'm Tomáš! I'm a software engineer and I love to build new things.
				</p>
			</div>

			<!-- Socials -->
			<div
				class="backdrop-blur-sm backdrop-brightness-90 xl:bg-gray-800 rounded-full p-2 px-3 mt-6 mx-auto xl:mx-0 flex flex-row flex-wrap gap-5 w-fit"
			>
				<SocialLink href="https://codeberg.org/tomkoid" icon="simple-icons:codeberg" />
				<SocialLink href="https://fosstodon.org/@tomkoid" icon="mdi:mastodon" />
				<SocialLink href="https://github.com/tomkoid" icon="mdi:github" />
			</div>
		</div>
	</div>
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
