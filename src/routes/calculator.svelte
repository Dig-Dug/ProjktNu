<script>
	let three = 3;
	let num = 0;
	function sum() {
		return num + num;
	}
	function result() {
		console.log(sum);
		sum();
	}
	function numb() {
		console.log(num);
	}
</script>

<h1>The Svelte Calculator</h1>

<div class="digits">
	<input
		type="button"
		on:click={() => {
			num = 1;
			console.log(num);
			num += num;
		}}
		value="1"
	/>
	<input
		type="button"
		on:click={() => {
			num = 2;
		}}
		value="2"
	/>
	<input type="button" on:click={numb} bind:value={three} />
	<input type="button" value="4" />
	<input type="button" value="5" />
	<input type="button" value="6" />
	<input type="button" value="7" />
	<input type="button" value="8" />
	<input type="button" value="9" />
	<input type="button" value="." />
	<input type="button" value="0" />
	<input
		type="button"
		on:click={() => {
			num = 0;
			console.log(num);
		}}
		value="C"
	/>
</div>

<div class="operators">
	<button on:click={sum}>+</button>
	<button>-</button>
	<button>*</button>
	<button>/</button>
	<button on:click={result}>=</button>
</div>
<div class="inputz">
	<input type="number" bind:value={num} />
</div>

<a href="/">back</a>

<style>
	a {
		background-color: orange;
	}
	.digits {
		widows: 418px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 4px;
		grid-row-gap: 6px;
	}
	.inputz {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 24px;
		grid-row-gap: 0px;
	}
	.operators {
		width: 135px;
		margin-left: 124px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 3px;
		grid-row-gap: 2px;
	}
</style>
