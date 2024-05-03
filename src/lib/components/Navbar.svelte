<script>
	import NavbarLink from './NavbarLink.svelte';
	import NavbarSection from './NavbarSection.svelte';
</script>

<nav class="fixed left-0 right-0 top-0 p-5 flex flex-row items-center justify-between">
	<NavbarSection>
		<div class="flex flex-nowrap">
			<NavbarLink href="/" classes="text-4xl" icon="mdi:home" />
		</div>
	</NavbarSection>
	<NavbarSection>
		<div class="flex flex-nowrap gap-5">
			<NavbarLink href="https://codeberg.org/tomkoid?tab=repositories" text="Projects" />
		</div>
	</NavbarSection>
</nav>
