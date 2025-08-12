<script lang="ts">
	export let name: string;
	export let description: string;
</script>

<div class="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md">
	<h2 class="text-2xl font-bold mb-2">{name}</h2>
	<p>{description}</p>
</div>
