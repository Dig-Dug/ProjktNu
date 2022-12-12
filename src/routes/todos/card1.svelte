<script>
	let question = '';
	let answer = '';
	export let questions = [{ question: '', answer: '' }];
	let saved = false;
	/* 	function save() {
		questions = [...questions];
		question = '';
		answer = '';
	} */
	function save() {
		questions.push(question, answer);
		console.log(questions);
		saved = true;
		return;
	}
	function close() {
		questions = [];
	}
	//$: console.log('newTodoName: ', question, answer);
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
<!-- {#each questions as { question, answer }} -->
<p>{questions}</p>
{#if saved}
	{#each questions as iu}
		<p>{question}</p>
		<p>{answer}</p>
	{/each}
{/if}
<a href="/">Back</a>

<!-- {/each} -->
<style>
	.p {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	a {
		background-color: orange;
	}
</style>
