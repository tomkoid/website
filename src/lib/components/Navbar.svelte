<script>
	import Icon from '@iconify/svelte';
	import NavbarLink from './NavbarLink.svelte';
	import NavbarSection from './NavbarSection.svelte';

	let mobileOpen = false;
</script>

{#if mobileOpen}
	<div
		class="fixed inset-0 z-5 sm:hidden"
		on:click={() => (mobileOpen = false)}
		aria-hidden="true"
	></div>
{/if}

<nav class="fixed z-10 left-0 right-0 top-0 p-5">
	<!-- Desktop / tablet -->
	<div class="hidden sm:flex items-center justify-between">
		<NavbarSection>
			<div class="flex flex-nowrap">
				<NavbarLink href="/" inNewTab={false} icon="mdi:home">
					<p class="text-2xl font-bold pr-2">Tomkoid</p>
				</NavbarLink>
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
	</div>

	<!-- Mobile -->
	<div class="sm:hidden flex items-center justify-between gap-3">
		<NavbarSection>
			<div class="flex flex-nowrap">
				<NavbarLink href="/" inNewTab={false} icon="mdi:home" iconSize={32}>
					<p class="text-xl font-bold pr-2">Tomkoid</p>
				</NavbarLink>
			</div>
		</NavbarSection>

		<NavbarSection>
			<button
				class="flex items-center justify-center text-gray-300 hover:text-white"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
				on:click={() => (mobileOpen = !mobileOpen)}
				type="button"
			>
				<Icon width="32" icon={mobileOpen ? 'mdi:close' : 'mdi:menu'} />
			</button>
		</NavbarSection>
	</div>

	{#if mobileOpen}
		<div class="sm:hidden mt-3 flex justify-end">
			<NavbarSection>
				<div class="flex flex-col gap-1 px-1">
					<NavbarLink
						icon="mdi:code"
						href="https://codeberg.org/tomkoid?tab=repositories"
						text="Projects"
						iconSize={28}
					/>
				</div>
			</NavbarSection>
		</div>
	{/if}
</nav>
