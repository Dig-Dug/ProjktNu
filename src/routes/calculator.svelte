<script>
	import { onMount } from 'svelte';
	import Buttonz from './todos/buttonz.svelte';
	let p = 66;

	function sum() {
		console.log(p + p);
	}
</script>

<h1>Calculate &#x1F92F</h1>
<div class="digits">
	<Buttonz bind:p />
	<div class="buttonz">
		<button on:click={p}>+</button>
	</div>
	<div>{p}</div>
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
