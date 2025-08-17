<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let description: string;
	export let link: string = '';
	export let logoPath: string = '/logo.png';
</script>

<div
	class="flex flex-col xl:flex-row flex-nowrap gap-6 transition-all p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-800 hover:border-gray-600"
>
	<div>
		<a href={link}>
			<img
				class="min-w-16 md:min-w-24 xl:min-w-32 w-32 rounded-4xl drop-shadow-3xl border-dashed border-4 border-orange-400/70 hover:border-orange-500 transition-all"
				id="pfp"
				src={logoPath}
				alt={name}
			/>
		</a>
	</div>
	<div>
		<div class="text-2xl font-bold mb-2">
			{#if link != ''}
				<div class="flex flex-row items-center gap-3">
					<a
						class="transition-all hover:underline hover:text-purple-300"
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{name}
					</a>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<Icon width="24" icon="mdi:open-in-new" />
					</a>
				</div>
			{:else}
				<h2>{name}</h2>
			{/if}
		</div>

		<p>{description}</p>
	</div>
</div>
