<script>
	let p = 0;
	//count += p;
	const ha = (p) => () => {
		console.log(p, '<--');
		//p = p;
		//return p;
	};
</script>

<button on:click={ha(1)}> 1 </button>
<button on:click={ha(2)}> 2 </button>
