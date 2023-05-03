<script>
	// @ts-nocheck
	import open from '../flashcard.svelte';
	/* let pp = 'sr'; */
	let question = '';
	let answer = '';
	let flashcard = false;
	let showIt = false;
	let hide = false;
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
		//	console.log(nope);
		//open = true;
		let r = document.getElementById('div1');
		r.classList.add('hide');
		console.log(open, r);
	}
	function hideA() {
		showIt = false;
		//flashcard = false;
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

		<!-- <button>Close {i}</button> -->
	</div>
{/if}

{#if flashcard}
	<div class="dov" on:click={show}>
		<p>{question}</p>

		{#if showIt}
			<p on:click={() => (show = hideA)}>{answer}</p>
		{/if}
	</div>
{/if}

<!-- svelte-ignore empty-block -->

<!-- {/each} -->
<style>
	.div1 {
		width: 402px;
		background-color: aquamarine;
		position: fixed;
	}
	.dov {
		background-color: rgb(110, 204, 160);
		position: relative;
		top: 25px;
		border-radius: 14px;

		width: 402px;
		margin-left: auto;
		margin-right: auto;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
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
	.hide {
		position: relative;
		visibility: hidden;
	}
</style>
