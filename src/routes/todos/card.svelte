<script>
	/* let pp = 'sr'; */
	let question = '';
	let answer = '';
	let flashcard = false;
	let showIt = false;
	let hide = '';
	let nope = true;
	let id = 'this';

	let r = document.getElementById(id);

	function save() {
		/* 	localStorage.setItem(question, '<--');
		localStorage.setItem(answer, '<--'); */
		flashcard = true;
		console.log(r, '^^^^');
		return;
	}
	function close() {
		console.log(nope);
		//nope = false;
		flashcard = false;
	}
	function hideA() {
		answer = '';
	}
	function show() {
		showIt = true;
	}
	function newOne() {
		console.log('ne');
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
		<button on:click={newOne}>new Card</button>
		<!-- <button>Close {i}</button> -->
	</div>
{/if}

{#if flashcard}
	<div class="dov" on:click={show}>
		<p>{question} &#11013 show answer?</p>
		{#if showIt}
			<p>{answer}</p>
			<p on:click={hideA}>&#11013 hide</p>
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
		position: relative;
		width: 402px;
		margin-left: auto;
		margin-right: auto;
	}
	/*  lolo */
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
