<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string = '';
	export let iconSize: number = 36;
	export let text: string = '';
	export let classes = '';
</script>

<a
	{href}
	target="_blank"
	class={classes +
		' h-full w-full flex flex-row items-center gap-2 text-2xl text-gray-300 transition-all hover:px-2'}
>
	<Icon style={`font-size: ${iconSize}px;`} {icon} />
	{text}
	<slot />
</a>
