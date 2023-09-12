<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		//swapEm();
		sum();
		console.log('on');
	});
	//@ts-ignore
	let num1, num2;

	let res = 0;

	let sumBool = false;
	let minusBool = false;

	let ans1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
	let ans2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

	function swapEm() {
		console.log('adddda');
		ans1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		ans2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

		num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

		return;
	}
	//let options = [ans1, ans2, res];
	//let options = [];
	function sum() {
		swapEm();
		//@ts-ignore
		res = num1 + num2;

		console.log(res);
		swithEm();
		sumBool = true;
		return;
	}
	function minus() {
		swapEm();
		//@ts-ignore
		res = num1 - num2;

		console.log(res);
		//swithEm();
		minusBool = true;
		return res;
	}
	let i = 0;
	function swithEm(min, max) {
		min = Math.ceil(0);
		max = Math.floor(3);
		i = Math.floor(Math.random() * (max - min) + min);
		console.log(i);
		return i;
	}
</script>

<svelte:window on:load={sum} />

<h1>Math-- for kids 🧮</h1>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>
<div class="table">
	<p>{num1}</p>

	<p>+</p>

	<p>{num2}</p>
	<p>=</p>
	<p>?</p>
</div>
<div class="table2">
	<div class="operation">
		<h2 on:click={sum}>Add</h2>
		<h2 on:click={minus}>Substract</h2>
		<h2>Multiply</h2>
		<h2>Divide</h2>
	</div>
	<br />

	<!-- 	{#each options as i} -->
	<div class="options">
		<!-- <p>{ans1}</p>
		<p>{ans2}</p>
		<p>{res}</p> -->
		{#if i == 0}
			<p>{ans1}</p>
			<p>{ans2}</p>
			{#if sumBool == true}
				<p on:click={sum}>{res}</p>
			{/if}
			{#if minusBool == true}
				<p on:click={minus}>{res}</p>
			{/if}
			<p>lolüouuüupiupiupo</p>
		{/if}

		{#if i == 1}
			<p>{ans2}</p>

			{#if sumBool == true}
				<p on:click={sum}>{res}</p>
			{/if}
			{#if minusBool == true}
				<p on:click={minus}>{res}</p>
			{/if}

			<p>{ans1}</p>
			<p>-------------------</p>
		{/if}

		{#if i == 2}
			{#if sumBool == true}
				<p on:click={sum}>{res}</p>
			{/if}
			{#if minusBool == true}
				<p on:click={minus}>{res}</p>
			{/if}
			<p>{ans2}</p>
			<p>{ans1}</p>
			<p>🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮</p>
		{/if}
		<!-- 		<p>{options}</p> -->
	</div>
	<!-- {/each} -->
</div>

<style>
	.operation {
		position: fixed;
		margin-left: 168px;
		margin-top: 44px;
	}
	.table {
		margin-left: 168px;
		margin-top: 44px;
		width: 419px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 0px;
	}
	.operation {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-left: 178px;
	}
	.table2 {
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
	}
</style>
