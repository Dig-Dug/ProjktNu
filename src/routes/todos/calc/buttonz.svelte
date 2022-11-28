<script>
	import { writable } from 'svelte/store';
	export const p = writable(70);
	//count += p;
	const ha = (p) => () => {
		console.log(p, '<--');
		//p = p;
		//return p;
	};
</script>

<button on:click={ha(1)}> 1 </button>
<button on:click={ha(2)}> 2 </button>
