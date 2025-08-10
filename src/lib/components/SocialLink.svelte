<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string;
</script>

<div>
	<a target="_blank" {href}
		><Icon
			class="hover:bg-gray-700 transition p-[5px] xl:p-0 rounded-full"
			width="36"
			height="36"
			{icon}
		/></a
	>
</div>
