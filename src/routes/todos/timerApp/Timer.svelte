<script>
	import { onInterval } from './utils';

	export let callback;
	export let interval = 1000;
	onInterval(callback, interval);
</script>
