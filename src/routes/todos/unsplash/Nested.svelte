<script>
	export let onClose;
	import { onMount, onDestroy } from 'svelte';

	function onClickDocument(e) {
		onClose();
	}
	onMount(() => {
		document.addEventListener('click', onClickDocument);
	});
	onDestroy(() => {
		document.removeEventListener('click', onClickDocument);
	});
</script>
