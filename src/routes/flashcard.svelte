<script>
	import Card from './todos/card.svelte';

	let open = false;
	function addCard() {
		open = true;
		return;
	}
	function delCard() {
		open = false;
	}
	function whot() {
		console.log('kioppoi');
	}
</script>

<h1>Flashcards</h1>
<button on:click={addCard}>{open ? '' : ''}Add Card</button>
<button on:click={delCard}>Delete Cards</button>
<a href="/">back</a>

{#if open}
	<Card on:click={whot} />
{/if}

<style>
	a {
		background-color: orange;
	}
</style>
