<script>
	export let questions = [];
	let question = '';
	let answer = '';
</script>

<div class="p">
	<h1>Flashcards</h1>
	<button>add Card</button>
	<button>delete Cards</button>
</div>

<input placeholder="write question here" bind:value={question} type="text" />
<input placeholder="write answer here" bind:value={answer} type="text" />
<button on:click={save}>save</button>
<button on:click={close}>close</button>

<style>
	.p {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
</style>
