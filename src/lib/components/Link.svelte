<script lang="ts">
	export let href: string = '';
	export let target: string = '';
</script>

<a
	class="text-blue-300 hover:text-blue-200 transition-all underline"
	{href}
	{target}
	rel="noopener noreferrer"
>
	<slot />
</a>
