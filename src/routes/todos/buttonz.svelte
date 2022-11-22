<script>
	export const p = '';

	const ha = (p) => () => {
		console.log(p);
		return p;
	};
</script>

<button on:click={ha(1)}> 1 </button>
<button on:click={ha(2)}> 2 </button>
