<script>
	//import Keypad from './Keypad.svelte';
	import Keypad from './todos/Keypad.svelte';

	let pin;

	//$: view = pin ? pin.replace(/\d(?!$)/g, '•') : '';
	$: view = pin;

	function handleSubmit() {
		//alert(`submitted ${pin}`);
		//let r = parse(pin);
		console.log(pin);
	}
</script>

<h1>The Svelte Calculator</h1>
<div class="center">
	<Keypad bind:value={pin} on:submit={handleSubmit} />
	<h1>{view}</h1>
</div>
<label>
	<a href="/">back</a>
</label>

<style>
	.center {
		left: 38%;
		position: relative;
	}
	a {
		left: 38%;
		position: relative;
		background-color: orange;
	}
	h1 {
		position: sticky;
	}
</style>
