<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = (num) => () => (value += num);
	const clear = () => (value = '');
	const submit = () => dispatch('submit');
	let sum = () => {
		console.log(value + value);
		return (value += value);
	};
</script>

<div class="keypad">
	<button on:click={select(1)}>1</button>
	<button on:click={select(2)}>2</button>
	<button on:click={select(3)}>3</button>
	<button on:click={select(4)}>4</button>
	<button on:click={select(5)}>5</button>
	<button on:click={select(6)}>6</button>
	<button on:click={select(7)}>7</button>
	<button on:click={select(8)}>8</button>
	<button on:click={select(9)}>9</button>

	<button disabled={!value} on:click={clear}>C</button>
	<button on:click={select(0)}>0</button>
	<button disabled={!value} on:click={submit}>=</button>
	<div class="op">
		<button disabled={!value} on:click={sum}>+</button>
		<button disabled={!value} on:click={submit}>-</button>
		<button disabled={!value} on:click={submit}>*</button>
		<button disabled={!value} on:click={submit}>/</button>
	</div>
</div>

<style>
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 5em);
		grid-template-rows: repeat(4, 3em);
		grid-gap: 0.5em;
	}

	button {
		margin: 0;
	}
	.op {
		display: grid;
		grid-template-columns: repeat(2, 5em);
		grid-template-rows: repeat(3, 3em);
		grid-gap: 0.5em;
		position: absolute;
		left: 30%;
		color: rgb(37, 89, 185);
	}
</style>
