<script lang="ts">
  import Icon, { type IconifyIcon } from '@iconify/svelte';

  export let href: string;
  export let icon: string;
</script>

<div>
  <button><a target="_blank" href={href}><Icon icon={icon} /></a></button>
</div>
