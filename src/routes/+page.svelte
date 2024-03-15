<script lang="ts">
  // import from static
  import logo from '$lib/assets/pfp.png';
	import SocialLink from '$lib/components/SocialLink.svelte';
</script>

<div class="flex flex-row flex-wrap items-center justify-between w-fit mx-auto gap-8">
  <div class="left">
    <img src={logo} alt="Moje profilova fotka" />
  </div>

  <div class="right">
    <h1 class="font-bold text-5xl">Software engineer</h1>
    <h1>Developer co umi</h1>

    <!-- Socials -->
    <div>
      <SocialLink href="https://codeberg.org/Tomkoid" icon="mdi:codeberg" />
    </div>
  </div>
</div>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
