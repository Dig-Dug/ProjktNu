<script>
	import { onInterval } from './utils.js';

	export let callback;
	export let interval = 10;
	onInterval(callback, interval);
</script>
