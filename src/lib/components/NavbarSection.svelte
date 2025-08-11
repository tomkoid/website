<script lang="ts">
	const bgOpacity = 20;
</script>

<div
	class={`w-fit drop-shadow-xl
	transition-all duration-500 relative z-10 overflow-hidden bg-gradient-to-r from-zinc-800/20 from-40% to-teal-800/20
before:absolute before:rounded-full before:top-0 before:left-0
before:w-full before:h-full
before:bg-gradient-to-b before:from-primary before:to-zinc-700/20
before:transition-transform before:duration-300
before:-z-10 hover:before:translate-x-full
	rounded-full p-1 px-2`}
>
	<slot />
</div>
