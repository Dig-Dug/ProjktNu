<script>
	import Buttonz from './todos/calc/buttonz.svelte';
	import { writable } from 'svelte/store';

	const count = writable(770);

	let countValue;

	function sum() {
		count.update((n) => n + 1);
	}
	function minus() {
		count.update((n) => n * 31);
	}
	function erase() {
		count.set(0);
	}
	count.subscribe((value) => {
		countValue = value;
	});
</script>

<h1>Calculate &#x1F92F</h1>
<div class="digits">
	<Buttonz bind:countValue />
	<div class="buttonz">
		<button on:click={sum}>+</button>
		<button on:click={minus}>-</button>
		<button on:click={erase}>c</button>
	</div>
	<div>{countValue}</div>
</div>

<a href="/">back</a>

<style>
	.digits {
		margin-left: 60%;
	}
	a {
		background-color: orange;
	}
	.buttonz {
		margin-top: 13px;
	}
</style>
