<script lang="ts">
	import Icon, { type IconifyIcon } from '@iconify/svelte';

	export let href: string;
	export let icon: string;
</script>

<div class="w-50 h-50">
	<a target="_blank" {href}
		><Icon
			class="hover:bg-gray-700 transition p-[5px] xl:p-0 rounded-full"
			style="font-size: 36px;"
			{icon}
		/></a
	>
</div>
