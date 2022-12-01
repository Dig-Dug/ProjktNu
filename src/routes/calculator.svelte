<script>
	/* import Buttonz from './todos/calc/buttonz.svelte';
	import p from './todos/calc/buttonz.svelte'; */
	import { writable } from 'svelte/store';

	let count = writable(0);
	/* const count = writable(770); */
	let p = writable(5);

	const ha = (p) => () => {
		console.log(p, '<--');
		p += 4;
		//return p;
	};
	//let countValue = 0;

	function sum() {
		count.update((p) => p + 7);

		console.log((p += p));
	}
	function minus() {
		count.update((n) => n * 31);
	}
	function erase() {
		count.set(0);
		p.set(0);
	}
	count.subscribe((value) => {
		p = value;
	});
</script>

<h1>Calculate &#x1F92F</h1>
<div class="digits">
	<!-- <Buttonz /> -->
	<div class="buttonz">
		<button on:click={sum}>+</button>
		<button on:click={minus}>-</button>
		<button on:click={erase}>c</button>
	</div>

	<!-- <button on:click={ha(1)}> 1 </button> -->
	<!-- 	<button on:click={ha(2)}> 2 </button> -->
	<button on:click={() => (p = 1)}> 1 </button>
	<button on:click={() => (p = 2)}> 2 </button>
	<button on:click={() => (count = 4)}> 4 </button>
	<button on:click={() => (count = 5)}> 5 </button>

	<br />
	<!-- <p>{countValue}</p> -->
	<p>{p}</p>
	<p>{count}</p>
	<input type="number" bind:value={p} />
	<a href="/">back</a>
	<!-- <div>{count}</div> -->
</div>

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
