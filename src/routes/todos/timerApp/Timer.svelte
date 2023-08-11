<script>
	import { onInterval } from './utils.js';

	export let callback;
	export let interval = 100000;
	onInterval(callback, interval);
</script>
