<script>
	/* let pp = 'sr'; */
	let question = '';
	let answer = '';
	let flashcard = false;
	let showIt = false;
	let nope = true;
	let id = 'this';

	let r = document.getElementById(id);

	function save() {
		/* 	localStorage.setItem(question, '<--');
		localStorage.setItem(answer, '<--'); */
		flashcard = true;
		console.log(r, '^^^^');
	}
	function close() {
		console.log(nope);
		nope = false;
	}
	function show() {
		showIt = true;
	}
</script>

<!-- {#each pp as i} -->
{#if nope}
	<div class="div1" {id}>
		<h1 class="cr">Create Flashcard</h1>
		<textarea
			placeholder="write question here"
			name=""
			id=""
			cols="24"
			rows="3"
			bind:value={question}
		/>
		<textarea
			placeholder="write answer here"
			name=""
			id=""
			cols="24"
			rows="3"
			bind:value={answer}
		/>
		<button on:click={save}>Save</button>
		<button on:click={close}>Close</button>
		<!-- <button>Close {i}</button> -->
	</div>
{/if}

{#if flashcard}
	<div class="dov" on:click={show}>
		<p>{question} &#11013 show answer?</p>
		{#if showIt}
			<p>{answer}</p>
		{/if}
	</div>
{/if}

<!-- {/each} -->
<style>
	.div1 {
		width: 402px;
		background-color: aquamarine;
		position: fixed;
	}
	.dov {
		background-color: antiquewhite;
		position: fixed;
	}
	p {
		margin-bottom: 0px;
		margin-top: 0px;
	}
	.cr {
		font-size: 22px;
		width: 26px;
		height: 1px;
		margin-bottom: 38.74;
		padding-bottom: 49px;
	}
	#this {
		position: relative;
		margin-left: auto;
		margin-right: auto;
	}
	#nope {
		visibility: hidden;
	}
</style>
