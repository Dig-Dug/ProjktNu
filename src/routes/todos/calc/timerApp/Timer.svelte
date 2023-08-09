<script>
	import { onInterval } from './utils.js';

	export let callback;
	export let interval = 10;
	onInterval(callback, interval);
</script>

<p>
	This component executes a callback every
	{interval} millisecond{interval === 1 ? '' : 's'}
</p>
