<script lang="ts">
import { writable } from 'svelte/store';

  import Button from '../stories/Button.svelte';
  const count = writable(1);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button label={`Count: ${$count}`} backgroundColor={'green'} size={'large'} on:click={()=>count.set($count +1)} />