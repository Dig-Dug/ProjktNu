<script>
	import Buttonz from './todos/calc/buttonz.svelte';
	import { writable } from 'svelte/store';

	let p;
	export const count = writable(0);
	function sum() {
		p.update((n) => n + 1);
	}
</script>

<h1>Calculate &#x1F92F</h1>
<div class="digits">
	<Buttonz bind:p />
	<div class="buttonz">
		<button on:click={sum}>+</button>
	</div>
	<div>{count}</div>
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
