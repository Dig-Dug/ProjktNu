<script>
	/* let pp = 'sr'; */
	let question = '';
	let answer = '';
	let flashcard = false;
	let showIt = false;
	function save() {
		localStorage.setItem(question, '<--');
		localStorage.setItem(answer, '<--');
		flashcard = true;
	}
	function close() {}
	function show() {
		showIt = true;
	}
</script>

<!-- {#each pp as i} -->
<div>
	<h1>Create Flashcard</h1>
	<textarea name="ziuzuizu" id="" cols="30" rows="10" bind:value={question} />
	<textarea name="" id="" cols="30" rows="10" bind:value={answer} />
	<button on:click={save}>Save</button>
	<button on:click={close}>Close</button>
	<!-- <button>Close {i}</button> -->
</div>

{#if flashcard}
	<div on:click={show}>
		<p>{question}</p>
		{#if showIt}
			<p>{answer}</p>
		{/if}
	</div>
{/if}

<!-- {/each} -->
