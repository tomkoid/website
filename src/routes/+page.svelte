<script lang="ts">
	// import from static
	import logo from '$lib/assets/logo.png';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
</script>

<div>
	<div
		class="flex bg-gradient-to-r from-gray-900 to-zinc-900 xl:flex-row flex-col-reverse lg:flex-nowrap justify-center xl:items-left items-center w-full gap-8 xl:gap-16 pt-50 py-30 px-7"
	>
		<div class="flex flex-col flex-wrap justify-center right">
			<div>
				<h1
					class="font-extrabold max-w-[800px] text-5xl mb-3 md:text-6xl lg:text-6xl xl:text-6xl xl:text-left text-center"
				>
					Software developer, designer
				</h1>
				<p class="text-xl text-gray-300 xl:text-left xl:max-w-3xl text-center w-full xl:text-2xl">
					I'm a software engineer and I love to build new things. My name is Tomáš btw.
				</p>
			</div>

			<div class="flex flex-row items-center mt-6 gap-3">
				<!-- Socials -->
				<div
					class="backdrop-blur-sm backdrop-brightness-40 bg-gray-500/30 rounded-full py-2 px-3 xl:mx-0 flex flex-row flex-wrap gap-5 w-fit"
				>
					<SocialLink href="https://codeberg.org/tomkoid" icon="simple-icons:codeberg" />
					<SocialLink href="https://github.com/tomkoid" icon="mdi:github" />
					<SocialLink href="https://fosstodon.org/@tomkoid" icon="mdi:mastodon" />
				</div>
				<button
					class="flex flex-row flex-wrap items-center gap-2 drop-shadow-md transition-all backdrop-blur-sm backdrop-brightness-50 bg-opacity-0 rounded-2xl hover:rounded-3xl hover:px-6 cursor-pointer bg-radial-[at_50%_75%] from-purple-800 from-20% via-60% to-purple-900 text-white px-4 py-3"
				>
					<Icon width="24" icon="mdi:email" />
					Contact me
				</button>
			</div>
		</div>

		<div class="left">
			<img
				class="w-32 md:w-64 rounded-4xl border border-amber-500"
				id="pfp"
				src={logo}
				alt="Moje profilova fotka"
			/>
		</div>
	</div>
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
