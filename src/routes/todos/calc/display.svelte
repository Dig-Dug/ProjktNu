<script>
	//https://svelte.deepwebworks.com/blog/calc
	let val = 0;
	const toDispString = (val) => {
		if (val == 0) return 0;
	};
</script>

<div>{toDispString(val)}</div>
