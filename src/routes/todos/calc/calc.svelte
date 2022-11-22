<script>
	import { writable } from 'svelte/store';
	export let count;
	count = writable(0);
</script>

<p>{$count}</p>
