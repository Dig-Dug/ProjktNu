<script>
	import count from './calc.svelte';
	let p = 0;
	//count += p;
	const ha = (p) => () => {
		console.log(p, '<--', count);
		//p = p;
		//return p;
	};
</script>

<button on:click={ha(1)}> 1 </button>
<button on:click={ha(2)}> 2 </button>

<p>{count}</p>
