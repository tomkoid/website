<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import '../app.scss';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css?family=Noto Sans" rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jersey+15&display=swap"
	rel="stylesheet"
/>
<link
	href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jersey+15&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
	rel="stylesheet"
/>

<Navbar />

<div>
	<slot />
</div>
<!-- {@render children()} -->
