<script>
	import Icon from '@iconify/svelte';
	import NavbarLink from './NavbarLink.svelte';
	import NavbarSection from './NavbarSection.svelte';
</script>

<nav class="fixed left-0 right-0 top-0 p-5 flex flex-row items-center justify-between">
	<NavbarSection>
		<div class="flex flex-nowrap">
			<NavbarLink href="/" icon="mdi:home" />
		</div>
	</NavbarSection>
	<NavbarSection>
		<div class="flex flex-row items-center gap-2">
			<NavbarLink
				icon="mdi:code"
				href="https://codeberg.org/tomkoid?tab=repositories"
				text="Projects"
			/>
		</div>
	</NavbarSection>
</nav>
