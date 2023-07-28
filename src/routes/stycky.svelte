<script lang="ts">
	import { onMount } from 'svelte';

	// @ts-nocheck

	let open = false;
	let content = '';
	let note = [];
	/* 	let open = false;
	let inputField = '';
	let newFieldValue = '';
*/

	function addIt() {
		//		open = true;
		note = [...note, { text: content, status: false }];
		content = '';
		console.log(note);

		let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let ii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let iii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let rgb = 'rgb';
		let l = rgb + '(' + (i + ' ' + ii + ' ' + iii) + ')';
		/* let r = document.getElementById('dov');
		r.addEventListener('click', function onClick(e) {
			e.target.style.backgroundColor = l;
		}); */
		/* const de = document.getElementById('dov');
		let rotate = 'rotate';
		de.style.transform = rotate + '(' + l + 'deg)'; */
		return l;
	}

	function process(e) {
		let code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			addIt();
		}
	}
</script>

<h1>Sticky Notes 🐙</h1>
<!-- <button on:click={addIt}>Add sticky note</button>  -->
<button>Add sticky note</button>

<textarea
	placeholder="note..."
	name="areaT"
	id=""
	cols="30"
	rows="10"
	on:keypress={process}
	bind:value={content}
/>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>
<!-- {#if open} -->
<div class="con">
	{#each note as i}
		<div id="dov" class="note" class:checked={i.content}>
			<p style="color: black;">{i.text}</p>
		</div>
	{/each}
</div>

<!-- {/if} -->
<style>
	textarea {
		resize: none;
		position: fixed;
		width: 176px;
		height: 176px;
		opacity: 0.5;
		font-weight: bold;
		border: 2px solid #ccc;
		border-radius: 4px;
		background-color: #ffffff;
		font-size: 16px;
		resize: none;
		margin-top: 33px;
	}
	.note {
		background-color: deeppink;
		/* transform: rotate(351deg); */
	}
	#dov {
		color: red;
	}
	.con {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 7px 7px;
		grid-template-areas:
			'. . .'
			'. . .'
			'. . .';

		width: 361px;
		height: 211px;
	}
</style>
