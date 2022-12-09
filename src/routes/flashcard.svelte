<script>
	import Card from './todos/card.svelte';

	export let open = false;

	//document.getElementById("").addEventListener("click", addCard)
	export let id = undefined;
	export let r = document.getElementById('this');

	function addCard() {
		open = true;
		id = 'this';

		console.log(r, '<---');
		//e = d;

		//return;
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
	<Card />
{/if}

<style>
	a {
		background-color: orange;
	}
</style>
