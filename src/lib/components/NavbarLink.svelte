<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string = '';
	export let iconSize: number = 38;
	export let text: string = '';
	export let classes = '';
</script>

<a {href} target="_blank" class={classes + ' flex flex-row items-center'}
	>{text}<Icon style={`font-size: ${iconSize}px;`} {icon} /></a
>
