<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string = '';
	export let iconSize: number = 36;
	export let text: string = '';
	export let classes = '';
	export let inNewTab = true;

	let target = inNewTab ? '_blank' : '';
</script>

<a
	{href}
	{target}
	rel={inNewTab ? 'noreferrer noopener' : undefined}
	class={classes +
		' h-full w-full flex flex-row items-center gap-2 text-2xl text-gray-300 transition-colors hover:text-white'}
>
	<Icon style={`font-size: ${iconSize}px;`} {icon} />
	{text}
	<slot />
</a>
