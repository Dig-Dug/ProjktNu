<script lang="ts">
	let open = false;
	let content = '';
	let rr = '🐙';
	let i = 0;
	let note = [];

	function process(e) {
		open = true;
		let code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			note = [...note, { text: content + rr, status: false }];
			content = '';
			let x = document.getElementById('dov');
			let newId = document.getElementById('dov');
			let r = Math.round(Math.random(255) * 255);
			let g = Math.round(Math.random(255) * 255);
			let b = Math.round(Math.random(255) * 255);
			let ranCol = `rgb(${r}, ${g}, ${b})`;
			x.style.backgroundColor = ranCol;
			x.style.transform = 'rotate(' + r + 'deg)';
			note[i++];
			upId();
			return x;
		}
	}
	function upId(x) {
		let k = document.getElementById('dov');
		let newOd = k.value;
		k.id = newOd;
	}
</script>

<h1>Sticky Notes 🐙</h1>
<br />
<a class="s" href="/" style="color: red;">back</a>
<textarea
	placeholder="write that note...🐙"
	name="areaT"
	id=""
	cols="30"
	rows="10"
	on:keypress={process}
	bind:value={content}
/>

<div class="con">
	{#each note as i}
		<div id="dov" class="note" class:checked={i.content}>
			<p style="color: black;">{i.text}</p>
		</div>
	{/each}
</div>

<style>
	a {
		margin: 0;
		position: absolute;
		top: 10%;
		left: 50%;
	}
	textarea {
		resize: none;
		position: fixed;
		width: 176px;
		height: 176px;
		opacity: 0.5;
		font-weight: bold;
		border: 2px solid #ccc;
		border-radius: 8px;
		background-color: #ffffff;
		font-size: 16px;
		resize: none;
		left: 145px;
	}
	.note {
		background-color: deeppink;
		border-radius: 8px;
		/* transform: rotate(351deg); */
	}
	#dov {
		color: red;
	}
	.con {
		margin-top: 54px;
		margin-left: 352px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
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
